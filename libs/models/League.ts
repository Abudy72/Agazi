import { Division, LeagueSet, TeamMember } from "./Division";

export interface League {
  leagueId: number;
  leagueName: string;
  season: number;
  divisions: Division[] | string; // This will contain all details such as sets, scores, etc..
  staff: LeagueStaff
}

interface LeagueStaff {
    owner: [number,string];
    regAdmins: [number,string][]
    supAdmins: [number,string][]
}

export interface LeagueHistory {
  leagueHistoryId: number;
  season: number;
  divId: number;
  teamHistory: TeamMember[];
  matchResults: LeagueSet[];
}

export interface Franchise {
  franchiseId: number;
  franchiseName: string;
}