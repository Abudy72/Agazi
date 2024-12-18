
import { NextResponse } from 'next/server';
import { query } from '../../libs/db/connection';

export async function GET() {
  try {
    const result = await query('SELECT * FROM little_monster.division');
    console.log(result.rows)

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error(error.message);
    return new Response(null, {
      status: 302,
    });
  }
}
