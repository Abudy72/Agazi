
import { eq, and } from "drizzle-orm";
import { db } from "./connection";
import { leagues } from "./schemas/leagues";
import { matchData } from "./schemas/matchData";
import { matches } from "./schemas/matches";
import { profiles } from "./schemas/profiles";
import { divisions } from "./schemas/divisions";

// Create a new league
export async function createLeague(leagueData: { league_id: number; league_name: string; current_season: number }) {
    return await db.insert(leagues).values(leagueData).execute();
}

// Update a league
export async function updateLeague(leagueId: number, updateData: Partial<{ league_name: string; current_season: number }>) {
    return await db.update(leagues)
        .set(updateData)
        .where(eq(leagues.league_id, leagueId))
        .execute();
}

// Create a new division
export async function createDivision(divisionData: { division_id: number; league_id: number; division_name: string }) {
    return await db.insert(divisions).values(divisionData).execute();
}

// Update a division
export async function updateDivision(leagueId: number, divisionId: number, updateData: Partial<{ division_name: string }>) {
    return await db.update(divisions)
        .set(updateData)
        .where(and(eq(divisions.league_id, leagueId), eq(divisions.division_id, divisionId)))
        .execute();
}

// Create a new match
export async function addNewMatch(matchDataEntry: { match_id: number; division_id: number }) {
    return await db.insert(matches).values(matchDataEntry).execute();
}

// Update a match
export async function updateMatch(divisionId: number, matchId: number, updateData: Partial<{ match_id: number }>) {
    return await db.update(matches)
        .set(updateData)
        .where(and(eq(matches.division_id, divisionId), eq(matches.match_id, matchId)))
        .execute();
}

// Create match data entry
export async function addMatchhData(matchDataEntry: typeof matchData.$inferInsert) {
    return await db.insert(matchData).values(matchDataEntry).execute();
}

// Update match data
export async function updateMatchData(playerId: number, matchId: number, updateData: Partial<typeof matchData.$inferInsert>) {
    return await db.update(matchData)
        .set(updateData)
        .where(and(eq(matchData.player_id, playerId), eq(matchData.match_id, matchId)))
        .execute();
}

// Create a new profile
export async function createProfile(profileData: { discord_id: number; player_id: number; player_name: string }) {
    return await db.insert(profiles).values(profileData).execute();
}

// Update a profile
export async function updateProfile(discordId: number, updateData: Partial<{ player_id: number; player_name: string }>) {
    return await db.update(profiles)
        .set(updateData)
        .where(eq(profiles.discord_id, discordId))
        .execute();
}

// fetch leagues
export async function fetchLeagueById(league_id: number) {
    return await db.select().from(leagues)
        .where(eq(leagues.league_id, league_id))
        .execute();
}

export async function fetchAllLeagues() {
    return await db.select().from(leagues).execute();
}

// fetch Divisions
export async function fetchDivisionById(divison_id: number) {
    return await db.select().from(divisions)
        .where(eq(divisions.division_id, divison_id))
        .execute();
}