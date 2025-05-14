import { getPlayerStatsByDivision } from '@/libs/util/stats';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextRequest) {
  try {
    const divisionParam = req.nextUrl.pathname.split('/').pop(); // gets the [division]
    const division = Number(divisionParam);
    
    if (isNaN(division)) {
      return NextResponse.json({ error: 'Invalid division parameter' }, { status: 400 });
    }

    const stats = await getPlayerStatsByDivision(division);
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching player stats:', error);
    return NextResponse.json({ error: 'Failed to fetch player stats' }, { status: 500 });
  }
}
