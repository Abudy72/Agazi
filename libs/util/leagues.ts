import { eq } from "drizzle-orm";
import { db } from "../db/connection";
import { leagues } from "../db/schemas/leagues";
import { divisions } from "../db/schemas/divisions";

export async function getLeagueWithDivisions(leagueId: number) {
    const league = await await db.select()
    .from(leagues)
    .where(eq(leagues.league_id, leagueId));

    const leagueDivisions = await db.select()
        .from(divisions)
        .where(eq(divisions.league_id, leagueId));

    return {
        league: league,
        divisions: leagueDivisions
    };
}