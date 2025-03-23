export interface MatchData {
    matchId: string;
    winningTeam: string;
    timeStamp: string;
    duration: string;
    players: MatchDataStats[]
    division: string;
}


export interface MatchDataStats {
    playerName: string;
    playerId: string;
    platform: string;
    team: Team;
    assignedRole: string;
    playedRole: string;
    kills: number;
    deaths: number;
    assists: number;
    goldEarned: number;
    xpEarned: number;
    damageDealt: number;
    damageTaken: number;
    damageMitigated: number;
    minionDamage: number;
    npcDamage: number;
    structureDamage: number;
    allyHealing: number;
    selfHealing: number;
    wardsPlaced: number;
    towerKills: number;
    phenoixKills: number;
    titanKills: number;
    inventory: PlayerBuild;
}

export enum Team {
    Order = "Order",
    Chaos = "Chaos",
}

export interface PlayerBuild {
    starterItem: string;
    relic: string;
    aspect: string;
    items: string[]
}