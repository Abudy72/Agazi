import League from "../models/League";
import LeagueSettings from "../models/LeagueSettings";

export function fetchLeagueBasedOnID(id: string): League {
    const league: League = {
      leagueId: "",
      leagueName: "",
      season: 0,
      settings: new LeagueSettings(16, 8),
      divisions: [],
      staff: {}
    }
  
    return league;
}