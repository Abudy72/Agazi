/* eslint-disable @typescript-eslint/no-explicit-any */


import { fetchDivisionByName } from "../db/LeagueOps";
import { createNewMatch } from "../db/StatsOps";
import { MatchData, Team } from "../Types/Stats";

export async function saveMatch(data: any) {
    const parsedData = transformMatchData(data);
    console.log(`MatchID: ${parsedData.matchId} recieved, and is being processed`)
     fetchDivisionByName(parsedData.division).then(divsion => {
        return createNewMatch(parsedData, divsion[0].division_id)
    })
    
}

const transformMatchData = (data: any): MatchData => (
    {
    matchId: data.matchID,
    winningTeam: data.winningTeam === "order" ? Team.Order : Team.Chaos,
    timeStamp: data.players[0].timestamp, // Assuming all players have the same timestamp
    duration: new Date(data.players[0].duration * 1000).toISOString().substr(11, 8), // Convert to "hh:mm:ss"
    division: data.divisions[1], // Assuming first division is the main one
    players: data.players.map((player: any) => ({
        playerName: player.playerName,
        playerId: player.playerId,
        platform: player.platform,
        team: player.team === "Order" ? Team.Order : Team.Chaos,
        assignedRole: player.assignedRole,
        playedRole: player.playedRole,
        kills: player.kills,
        deaths: player.deaths,
        assists: player.assists,
        goldEarned: player.goldEarned,
        xpEarned: player.xpEarned,
        damageDealt: player.damageDealt,
        damageTaken: player.damageTaken,
        damageMitigated: player.damageMitigated,
        minionDamage: player.minionDamage,
        npcDamage: player.npcDamage,
        structureDamage: player.structureDamage,
        allyHealing: player.allyHealing,
        selfHealing: player.selfHealing,
        wardsPlaced: player.wardsPlaced,
        towerKills: player.towerKills,
        phenoixKills: player.phoenixKills,
        titanKills: player.titanKills,
        jungle_camp_xp: player.jungleCampKillXp,
        jungle_camp_gold: player.jungleCampKillGold,
        jungle_camp_lowestLevel_xp: player.jungleCampLowestLevelXp,
        minion_assist_xp: player.minionAssistXp,
        minion_assist_gold: player.minionAssistGold,
        minion_kill_xp: player.minionKillXp,
        minion_kill_gold: player.minionKillGold,
        minion_lowestLevel_xp: player.minionLowestLevelXp,
        gold_blessing: player.goldBlessing,
        player_kill_xp: player.playerKillXp,
        player_kill_gold: player.playerKillGold,
        inventory: {
            starterItem: player.inventory.starterItem,
            god_name: player.inventory.godName,
            relic: player.inventory.relic,
            aspect: player.inventory.aspect,
            items: player.inventory.items.filter((item: string) => item !== ""),
        }
    }))
});
