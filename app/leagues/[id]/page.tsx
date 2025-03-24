import Navbar from "@/components/Header";
import { LeagueHomePageMain } from "@/components/League/LeagueHomePageMain";
import LeagueInfo, { LeagueInfoProps } from "@/components/League/LeagueInfo";
import { PageNotFound } from "@/components/PageNotFound";
import { getLeagueWithDivisions } from "@/libs/util/leagues";
interface LeaguePageProps {
  params: {
    id: string;
  };
}

const LeaguePage: React.FC<LeaguePageProps> = async ({ params }) => {
  const {id}  = await params
  const league = await getLeagueWithDivisions(Number(id));
  const info: LeagueInfoProps = {
    leagueName: "Olympus Smite League",
    season: 1,
    seasonStart: "25/05/2025",
    seasonEnd: "17/08/2025",
    leaguePrizing: 50000,
    Divisions: league.divisions,
    ruleBookLink: "google.com",
    discordLink: "https://www.youtube.com",
    twitterLink: "x.com",
    twitchLink: "twitch.com",
    logoLink: "/kfc-logo.png",
    owners: ['Scylla' , 'Fenrir', 'Thor'],
    management: [['Loki','Athens Manager'], ['Ares','Mod'], ['Thoth','Smart Man'], ['Vulcan','Kaboom']]
  }
  
  return league ? (
    <div>
      <Navbar activeTab={-1} />
      <LeagueInfo leagueInfo={info}/>
      <LeagueHomePageMain
        leagueName={league.league[0]} 
        divisions={league.divisions}
      />
    </div>
  ) : (
    <div>
      <Navbar activeTab={-1} />
      <div className="flex items-center justify-center h-screen">
        <PageNotFound />
      </div>
    </div>
  );
};



export default LeaguePage;

