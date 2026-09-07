import { NextRequest, NextResponse } from 'next/server';
import { getDb, initDb } from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    await initDb();
    const sql = getDb();

    // 1. Total page views & breakdown
    const totalViewsResult = await sql`SELECT COUNT(*) as count FROM page_views`;
    const pageBreakdown = await sql`
      SELECT page_name, COUNT(*) as count 
      FROM page_views 
      GROUP BY page_name 
      ORDER BY count DESC
    `;

    // 2. Total clicks & breakdown by category
    const totalClicksResult = await sql`SELECT COUNT(*) as count FROM click_events`;
    const clicksByCategory = await sql`
      SELECT category, COUNT(*) as count 
      FROM click_events 
      GROUP BY category 
      ORDER BY count DESC
    `;

    // 3. Recent click events
    const recentEvents = await sql`
      SELECT id, category, label, href, page, created_at 
      FROM click_events 
      ORDER BY created_at DESC 
      LIMIT 50
    `;

    // 4. Form Submissions
    const submissions = await sql`
      SELECT id, name, email, phone, service, message, status, created_at 
      FROM form_submissions 
      ORDER BY created_at DESC 
      LIMIT 50
    `;

    return NextResponse.json({
      success: true,
      stats: {
        totalPageViews: parseInt(totalViewsResult[0]?.count || '0', 10),
        pageBreakdown,
        totalClicks: parseInt(totalClicksResult[0]?.count || '0', 10),
        clicksByCategory,
        recentEvents,
        submissions,
      },
    });
  } catch (err: any) {
    console.error('Admin Stats API error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
