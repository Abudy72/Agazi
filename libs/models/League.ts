import { Division } from "../Types/League";
import LeagueSettings from "./LeagueSettings";

class League {
  leagueId: string;
  leagueName: string;
  season: number;
  settings: LeagueSettings;
  divisions: Division[];
  staff: {
    owner?: [number, string];
    regAdmins?: [number, string][];
    supAdmins?: [number, string][];
  };

  constructor(
    leagueName: string,
    options:
      | {
          type: "homePageData";
          leagueId: string;
          season: number;
          settings: LeagueSettings;
          divisions: Division[];
          staff: {
            owner: [number, string];
            regAdmins: [number, string][];
            supAdmins: [number, string][];
          };
        }
      | {
          type: "newLeague";
          divisionData: { divName: string; rangeMMR: [number, number] }[];
        }
  ) {
    if (options.type === "homePageData") {
      // Logic for League Home Page
      this.leagueId = options.leagueId;
      this.leagueName = leagueName;
      this.season = options.season;
      this.settings = options.settings;
      this.divisions = options.divisions;
      this.staff = options.staff;
    } else if (options.type === "newLeague") {
      // Logic for Creating a New League
      this.leagueId = generateShortId(); // Generate a new leagueId
      this.leagueName = leagueName;
      this.season = 1; // Default season for new leagues
      this.settings = {
        numberOfTeamsRequired: 0, // Placeholder
        maxTeamSize: 0,   // Placeholder
      }
      this.staff = {
        owner: [0, ""], // Placeholder owner
        regAdmins: [],
        supAdmins: [],
      };

      // Generate divisions
      this.divisions = options.divisionData.map((d) => ({
        divisionId: generateShortId(),
        divisionName: d.divName,
        rangeMMR: d.rangeMMR,
        schedule: [],
        bracket: [],
        currentSeason: 1,
      } as Division));
    } else {
      throw new Error("Invalid constructor parameters.");
    }
  }
}



function generateShortId(): string {
  const timestamp = Math.floor(Date.now() / 1000).toString(36); // Convert timestamp to base36
  const random = Math.random().toString(36).substring(2, 6); // 4 random characters
  return `${timestamp}${random}`; // Combine timestamp and random part
}

export default League;
