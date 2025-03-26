export interface MatchData {
  matchId: string;
  winningTeam: string;
  timeStamp: string;
  duration: string;
  players: MatchDataStats[];
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
  jungle_camp_xp: number;
  jungle_camp_gold: number;
  jungle_camp_lowestLevel_xp: number;
  minion_assist_xp: number;
  minion_assist_gold: number;
  minion_kill_xp: number;
  minion_kill_gold: number;
  minion_lowestLevel_xp: number;
  gold_blessing: number;
  player_kill_xp: number;
  player_kill_gold: number;
  inventory: PlayerBuild;
}

export enum Team {
  Order = "Order",
  Chaos = "Chaos",
}

export interface PlayerBuild {
  god_name: string;
  starterItem: string;
  relic: string;
  aspect: string;
  items: string[];
}
