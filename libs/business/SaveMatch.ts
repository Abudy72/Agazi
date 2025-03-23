/* eslint-disable @typescript-eslint/no-explicit-any */

import { fetchDivisionByName } from "../db/LeagueOps";
import { createNewMatch } from "../db/StatsOps";
import { MatchData, Team } from "../Types/Stats";

export async function saveMatch(data: any) {
    const parsedData = transformMatchData(data);
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
        inventory: {
            starterItem: player.inventory.starterItem,
            relic: player.inventory.relic,
            aspect: player.inventory.aspect,
            items: player.inventory.items.filter((item: string) => item !== ""),
        }
    }))
});
