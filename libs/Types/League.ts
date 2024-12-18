import { Game, Side, SideInfo } from "react-tournament-bracket/lib/components/model";

export interface LeagueBracket {
  stageType: StageType;
  groups? : {
    groupName: string,
    teamInfo: {
      rank: number,
      seed?: number,
      id: string;
      name: string;
    }[]
  }
}
export interface Division {
  divisionId: string;
  divisionName: string;
  rangeMMR: [number, number];
  groups?: {
    groupName: string,
    teams : {
      teamId: string
    }
  }
  schedule?: LeagueSet[];
  bracket?: LeagueBracket[];
  currentSeason: number;
}
export interface Match {
  id: string;
  matchId: string | number;
  gameType: GameType;
  date: number;
  sides : {
    [side in Side]: SideInfo;
  }
}
export interface LeagueSet {
  leagueSet: Game
  setType: SetType
}

export enum TeamType {
  BYOT = "Bring your own team",
  Draft = "Draft",
}
export enum SetType {
  BO1 = "Best of One",
  BO3 = "Best of Three",
  BO5 = "Best of Five"
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
export enum GameType {
  RS = "Regular Season",
  PI = "Play Ins",
  QF = "Quarter Finals",
  SF = "Semi Finals",
  FF = "Finals",
  _3rd = "Third place match"
}

export enum StageType {
  RR = "Round Robin",
  SE = "Single Elimination",
  SB = "Swiss Sys Bracket"
}