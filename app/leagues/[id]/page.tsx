import Navbar from "@/components/Header";
import { LeagueHomePageMain } from "@/components/League/LeagueHomePageMain";
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
  return league ? (
    <div>
      <Navbar activeTab={-1} />
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

