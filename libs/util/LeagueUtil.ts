import League from "../models/League";

export function fetchLeagueBasedOnID(id: string): League {
    const league: League = {
      leagueId: id,
      leagueName: "",
      season: 0,
      divisions: [],
      staff: {},
      logo: ""
    }
  
    return league;
}