
import { eq, sum } from "drizzle-orm";
import { db } from "../db/connection";
import { matchData } from "../db/schemas/matchData";
import { divisions } from "../db/schemas/divisions";
import { matches } from "../db/schemas/matches";

export interface PlayerStats {
    player_id: number;
    player_name: string;
    total_kills: number;
    total_deaths: number;
    total_assists: number;
    total_gold_earned: number;
    total_xp_earned: number;
    total_damage_dealt: number;

    total_damage_mitigated: number;
    total_minion_damage: number;
    total_npc_damage: number;
    total_ally_healing: number;
    total_wards_placed: number;
    total_structure_damage:number;
    total_tower_kills: number;
    total_pheonix_kills: number;
    total_titan_kills: number;
}

export async function getPlayerStatsByDivision(divisionId: number): Promise<PlayerStats[]> {
    const result = await db
        .select({
            player_id: matchData.player_id,
            player_name: matchData.player_name,
            total_kills: sum(matchData.kills).as("total_kills"),
            total_deaths: sum(matchData.deaths).as("total_deaths"),
            total_assists: sum(matchData.assists).as("total_assists"),
            total_gold_earned: sum(matchData.gold_earned).as("total_gold_earned"),
            total_xp_earned: sum(matchData.xp_earned).as("total_xp_earned"),
            total_damage_dealt: sum(matchData.damage_dealt).as("total_damage_dealt"),

            total_damage_mitigated: sum(matchData.damage_mitigated).as("total_damage_mitigated"),
            total_minion_damage: sum(matchData.minion_damage).as("total_minion_damage"),
            total_npc_damage: sum(matchData.npc_damage).as("total_npc_damage"),
            total_ally_healing: sum(matchData.ally_healing).as("total_ally_healing"),
            total_wards_placed: sum(matchData.wards_placed).as("total_wards_placed"),
            total_structure_damage: sum(matchData.structure_damage).as("total_structure_damage"),
            total_tower_kills: sum(matchData.tower_kills).as("total_tower_kills"),
            total_pheonix_kills: sum(matchData.phoenix_kills).as("total_pheonix_kills"),
            total_titan_kills: sum(matchData.titan_kills).as("total_titan_kills"),
        })
        .from(matchData)
        .innerJoin(matches, eq(matchData.match_id, matches.match_id))
        .innerJoin(divisions, eq(matches.division_id, divisions.division_id))
        .where(eq(divisions.division_id, divisionId))
        .groupBy(matchData.player_id, matchData.player_name);

    return result.map(row => ({
        player_id: Number(row.player_id),
        player_name: String(row.player_name),
        total_kills: Number(row.total_kills),
        total_deaths: Number(row.total_deaths),
        total_assists: Number(row.total_assists),
        total_gold_earned: Number(row.total_gold_earned),
        total_xp_earned: Number(row.total_xp_earned),
        total_damage_dealt: Number(row.total_damage_dealt),

        total_damage_mitigated: Number(row.total_damage_mitigated),
        total_minion_damage: Number(row.total_minion_damage),
        total_npc_damage: Number(row.total_npc_damage),
        total_ally_healing: Number(row.total_ally_healing),
        total_wards_placed: Number(row.total_wards_placed),
        total_structure_damage: Number(row.total_structure_damage),
        total_tower_kills: Number(row.total_tower_kills),
        total_pheonix_kills: Number(row.total_pheonix_kills),
        total_titan_kills: Number(row.total_titan_kills),
    }))
}
