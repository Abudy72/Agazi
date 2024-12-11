export interface League {
  leagueId: number;
  leagueName: string;
  season: number;
  //Team/Franchise List:
  //Brackets/Schedules List:
  //Divisions:
  //History
  staff: LeagueStaff
}

interface LeagueStaff {
    ownerId: number;
    ownerName: string;
    regAdmins: [number,string][]
    supAdmins: [number,string][]
}

export interface Division {
    divName: string;
    mmrRange: [number,number] // {HIGHER,LOWER}
    //bracket:
    //schedule:
    //resultsHistory
}