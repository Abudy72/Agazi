import { Franchise } from "./League";

export interface Division {
  divisionId: number;
  divisionName: string;
  rangeMMR: [number, number];
  schedule: LeagueSet[];
  bracket: LeagueSet[];
  currentSeason: number;
}

export interface TeamMember {
  id: number;
  role: TeamMemberRole;
  teamType: TeamType;
  franchise?: Franchise;
}
export interface Match {
    matchId: string | number;
    isSaved: boolean;
}
export interface LeagueSet {
    TeamA: Franchise | string;
    TeamB: Franchise | string;
    TeamAScore?: number;
    TeamBScore?: number;
    isLeagueCompleted: boolean;
    
}

export enum TeamType {
  BYOT = "Bring your own team",
  Draft = "Draft",
}
export enum TeamMemberRole {
    Carry = "Carry",
    Support = "Support",
    Mid = "Mid",
    Jungle = "Jungle",
    Solo = "Solo",
    Sub = "Sub",
    Coach = "Coach",
    Captain = "Captain",
  }
