import { NextResponse } from 'next/server';
import { getPlayerStatsByDivision } from '@/libs/util/stats';

export async function GET(req: Request, { params }: { params: { division: string } }) {
  try {
    const searchParams = await params;
    const division = searchParams.division
    const stats = await getPlayerStatsByDivision(Number(division));
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching player stats:', error);
    return NextResponse.json({ error: 'Failed to fetch player stats' }, { status: 500 });
  }
}
