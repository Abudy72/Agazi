import Navbar from "@/components/Header";
import { LeagueHomePageMain } from "@/components/League/LeagueHomePageMain";
import { PageNotFound } from "@/components/PageNotFound";
import {fetchLeagueBasedOnID} from "@/libs/util/LeagueUtil"
interface LeaguePageProps {
  params: {
    id: string;
  };
}

const LeaguePage: React.FC<LeaguePageProps> = async ({ params }) => {
  const { id } = await params;
  const league = fetchLeagueBasedOnID(id);
  return league ? (
    <div>
      <Navbar activeTab={-1} />
      <LeagueHomePageMain
        leagueName={"Olympus Smite Leage"}
        divisions={league.divisions.map(d => d.divisionName)}
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

