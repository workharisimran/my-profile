import { NextRequest, NextResponse } from 'next/server';
import { getDb, initDb } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    await initDb();
    const sql = getDb();
    const body = await req.json();

    const { type } = body;

    if (type === 'pageview') {
      const { pageName, path, referrer } = body;
      const userAgent = req.headers.get('user-agent') || '';

      await sql`
        INSERT INTO page_views (page_name, path, referrer, user_agent)
        VALUES (${pageName || 'Unknown'}, ${path || '/'}, ${referrer || ''}, ${userAgent})
      `;

      return NextResponse.json({ success: true, recorded: 'pageview' });
    }

    if (type === 'click') {
      const { category, label, href, page } = body;

      await sql`
        INSERT INTO click_events (category, label, href, page)
        VALUES (${category || 'other'}, ${label || 'Click'}, ${href || ''}, ${page || 'Unknown'})
      `;

      return NextResponse.json({ success: true, recorded: 'click' });
    }

    return NextResponse.json({ success: false, error: 'Invalid tracking type' }, { status: 400 });
  } catch (err: any) {
    console.error('Track API error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
