import { neon } from '@neondatabase/serverless';

export const DATABASE_URL =
  process.env.DATABASE_URL ||
  'postgresql://neondb_owner:npg_Hdy9bqtsFx5g@ep-floral-brook-a5bedanv-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

export function getDb() {
  return neon(DATABASE_URL);
}

// Automatically create tables if they do not already exist
let tablesInitialized = false;

export async function initDb() {
  if (tablesInitialized) return;
  try {
    const sql = getDb();

    // Table 1: Page Views
    await sql`
      CREATE TABLE IF NOT EXISTS page_views (
        id SERIAL PRIMARY KEY,
        page_name VARCHAR(100) NOT NULL,
        path VARCHAR(255) NOT NULL,
        referrer TEXT,
        user_agent TEXT,
        ip_hash VARCHAR(64),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Table 2: Click & Interaction Events
    await sql`
      CREATE TABLE IF NOT EXISTS click_events (
        id SERIAL PRIMARY KEY,
        category VARCHAR(50) NOT NULL,
        label VARCHAR(255) NOT NULL,
        href TEXT,
        page VARCHAR(100),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Table 3: Form Submissions (Contact Entries)
    await sql`
      CREATE TABLE IF NOT EXISTS form_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(150) NOT NULL,
        email VARCHAR(200) NOT NULL,
        phone VARCHAR(50),
        service VARCHAR(100),
        message TEXT NOT NULL,
        status VARCHAR(30) DEFAULT 'new',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Table 4: Showcase Websites
    await sql`
      CREATE TABLE IF NOT EXISTS showcase_websites (
        id SERIAL PRIMARY KEY,
        item_id INT NOT NULL,
        slug VARCHAR(100) UNIQUE NOT NULL,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(100) NOT NULL,
        domain VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        brand_color VARCHAR(50),
        accent_color VARCHAR(50),
        description TEXT NOT NULL,
        featured BOOLEAN DEFAULT true,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    tablesInitialized = true;
  } catch (error) {
    console.error('Error initializing Neon DB tables:', error);
  }
}

// Seed Showcase Websites table from showcase.json
export async function seedShowcaseDb(force = false) {
  try {
    await initDb();
    const sql = getDb();
    const showcaseJson = await import('@/data/showcase.json');
    const websites = showcaseJson.websites || [];

    if (!force) {
      const existing = await sql`SELECT COUNT(*)::int AS count FROM showcase_websites;`;
      if (existing && existing[0] && Number(existing[0].count) > 0) {
        return { success: true, message: 'Showcase table already populated', count: existing[0].count };
      }
    }

    for (const item of websites) {
      await sql`
        INSERT INTO showcase_websites (
          item_id, slug, name, category, domain, image, brand_color, accent_color, description, featured, updated_at
        ) VALUES (
          ${item.id},
          ${item.slug},
          ${item.name},
          ${item.category},
          ${item.domain},
          ${item.image},
          ${item.brandColor || ''},
          ${item.accentColor || ''},
          ${item.description},
          ${item.featured !== false},
          CURRENT_TIMESTAMP
        )
        ON CONFLICT (slug) DO UPDATE SET
          item_id = EXCLUDED.item_id,
          name = EXCLUDED.name,
          category = EXCLUDED.category,
          domain = EXCLUDED.domain,
          image = EXCLUDED.image,
          brand_color = EXCLUDED.brand_color,
          accent_color = EXCLUDED.accent_color,
          description = EXCLUDED.description,
          featured = EXCLUDED.featured,
          updated_at = CURRENT_TIMESTAMP;
      `;
    }

    return { success: true, message: `Successfully seeded ${websites.length} showcase websites` };
  } catch (error) {
    console.error('Error seeding showcase database:', error);
    return { success: false, error: String(error) };
  }
}

// Fetch Showcase items from Neon DB with fallback to JSON
export async function getShowcaseWebsitesFromDb() {
  try {
    await initDb();
    const sql = getDb();

    // Query from Neon DB
    const rows = await sql`
      SELECT id, item_id, slug, name, category, domain, image, brand_color, accent_color, description, featured
      FROM showcase_websites
      ORDER BY item_id ASC;
    `;

    if (rows && rows.length > 0) {
      return rows.map((r: any) => ({
        id: r.item_id || r.id,
        slug: r.slug,
        name: r.name,
        category: r.category,
        domain: r.domain,
        image: r.image,
        brandColor: r.brand_color || '#000000',
        accentColor: r.accent_color || '#00f59b',
        description: r.description,
        featured: r.featured,
      }));
    }

    // Auto-seed if empty
    await seedShowcaseDb(true);
    const reseeded = await sql`
      SELECT id, item_id, slug, name, category, domain, image, brand_color, accent_color, description, featured
      FROM showcase_websites
      ORDER BY item_id ASC;
    `;

    if (reseeded && reseeded.length > 0) {
      return reseeded.map((r: any) => ({
        id: r.item_id || r.id,
        slug: r.slug,
        name: r.name,
        category: r.category,
        domain: r.domain,
        image: r.image,
        brandColor: r.brand_color || '#000000',
        accentColor: r.accent_color || '#00f59b',
        description: r.description,
        featured: r.featured,
      }));
    }
  } catch (err) {
    console.error('Failed to query showcase from DB, falling back to local JSON:', err);
  }

  // Fallback to local JSON if DB is unavailable
  const showcaseJson = await import('@/data/showcase.json');
  return showcaseJson.websites || [];
}
