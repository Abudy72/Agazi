import { eq } from "drizzle-orm";
import { db } from "../db/connection";
import { leagues } from "../db/schemas/leagues";
import { divisions } from "../db/schemas/divisions";
import { Division } from "../Types/League";
import { owners } from "../db/schemas/owners";
import { management } from "../db/schemas/management";


export interface LeagueInfoProps {
  leagueName: string;
  season: number;
  seasonStart: Date;
  seasonEnd: Date;
  leaguePrizing: number;
  draftStyle: string;
  signups: string;
    divisions: Division[];

  ruleBookLink: string;
  discordLink: string;
  twitterLink: string;
  twitchLink: string;
  logoLink: string;

  owners: string[];
  management: [string, string][]; // [ManagerName, ManagerTItle]
}

export async function getOwnersByLeagueId(leagueId: number) {
    return await db
      .select()
      .from(owners)
      .where(eq(owners.league_id, leagueId));
  }

  export async function getManagementByLeagueId(leagueId: number) {
    return await db
      .select()
      .from(management)
      .where(eq(management.league_id, leagueId));
  }
  

export async function getLeagueWithDivisions(leagueId: number): Promise<LeagueInfoProps | null> {
    const league = await await db.select()
    .from(leagues)
    .where(eq(leagues.league_id, leagueId));

    const leagueDivisions = await db.select()
        .from(divisions)
        .where(eq(divisions.league_id, leagueId));

    const owners = await getOwnersByLeagueId(leagueId).then(ownerList => {
        return ownerList.map((o) => o.owner_name) 
    } );

    const management = await getManagementByLeagueId(leagueId).then(managementList => {
        return managementList.map(m => [m.manager_name, m.manager_title] as [string, string]);
    });

    if(league.length == 1){
        return {
            leagueName: league[0].league_name,
            season: league[0].current_season,
            seasonStart: league[0].season_start,
            seasonEnd: league[0].season_end,
            leaguePrizing: league[0].league_prizing,
            draftStyle: league[0].draft_style,
            signups: league[0].signups,
            ruleBookLink: league[0].rule_book_link,
            discordLink: league[0].discord_link,
            twitterLink: league[0].x_link,
            twitchLink: league[0].twitch_link,
            logoLink: league[0].logo_link,
            divisions: leagueDivisions,
            owners: owners,
            management: management
        }
    }else {
        return null;
    }
}