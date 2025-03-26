import { MatchData, MatchDataStats } from "../Types/Stats";
import { db } from "./connection";
import { matchData } from "./schemas/matchData";
import { matches } from "./schemas/matches";

export async function createNewMatch(match: MatchData, divId: number) {
  return await db
    .insert(matches)
    .values({
      match_id: match.matchId,
      division_id: divId,
      winning_team: match.winningTeam,
      duration: match.duration,
    })
    .execute()
    .then((e) => {
      if (e[0].affectedRows == 1) {
        saveMatchDetails(match.matchId, match.players);
      } else {
        console.log(
          `${match.matchId} was saved, but player stats failed to save.`
        );
      }
    });
}

async function saveMatchDetails(matchId: string, data: MatchDataStats[]) {
  const playerStats = data.map((player) => ({
    match_id: matchId,
    player_name: player.playerName,
    player_id: player.playerId,
    platform: player.platform,
    team: player.team,
    assigned_role: player.assignedRole,
    played_role: player.playedRole,
    kills: player.kills,
    deaths: player.deaths,
    assists: player.assists,
    gold_earned: player.goldEarned,
    xp_earned: player.xpEarned,
    damage_dealt: player.damageDealt,
    damage_taken: player.damageTaken,
    damage_mitigated: player.damageMitigated,
    minion_damage: player.minionDamage,
    npc_damage: player.npcDamage,
    structure_damage: player.structureDamage,
    ally_healing: player.allyHealing,
    self_healing: player.selfHealing,
    wards_placed: player.wardsPlaced,
    tower_kills: player.towerKills,
    phoenix_kills: player.phenoixKills,
    titan_kills: player.titanKills,
    starter_item: player.inventory.starterItem,
    relic: player.inventory.relic,
    aspect: player.inventory.aspect,
    god_name: player.inventory.god_name,
    item1: player.inventory.items[0] ? player.inventory.items[0] : "",
    item2: player.inventory.items[0] ? player.inventory.items[0] : "",
    item3: player.inventory.items[0] ? player.inventory.items[0] : "",
    item4: player.inventory.items[0] ? player.inventory.items[0] : "",
    item5: player.inventory.items[0] ? player.inventory.items[0] : "",
    item6: player.inventory.items[0] ? player.inventory.items[0] : "",
    jungle_camp_xp: player.jungle_camp_xp,
    jungle_camp_gold: player.jungle_camp_gold,
    jungle_camp_lowestLevel_xp: player.jungle_camp_lowestLevel_xp,
    minion_assist_xp: player.minion_assist_xp,
    minion_assist_gold: player.minion_assist_gold,
    minion_kill_xp: player.minion_kill_xp,
    minion_kill_gold: player.minion_kill_gold,
    minion_lowestLevel_xp: player.minion_lowestLevel_xp,
    gold_blessing: player.gold_blessing,
    player_kill_xp: player.player_kill_xp,
    player_kill_gold: player.player_kill_gold,
  }));
  return await db.insert(matchData).values(playerStats).execute();
}
