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

    tablesInitialized = true;
  } catch (error) {
    console.error('Error initializing Neon DB tables:', error);
  }
}
