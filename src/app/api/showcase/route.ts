import { NextResponse } from 'next/server';
import { getShowcaseWebsitesFromDb, seedShowcaseDb } from '@/lib/db';
import showcaseJson from '@/data/showcase.json';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const websites = await getShowcaseWebsitesFromDb();
    return NextResponse.json({
      title: showcaseJson.title,
      subtitle: showcaseJson.subtitle,
      version: showcaseJson.version,
      developer: showcaseJson.developer,
      categories: showcaseJson.categories,
      websites,
    });
  } catch (error) {
    console.error('API Error in GET /api/showcase:', error);
    return NextResponse.json(
      {
        ...showcaseJson,
        websites: showcaseJson.websites || [],
      },
      { status: 200 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const force = Boolean(body.force);
    const result = await seedShowcaseDb(force);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
