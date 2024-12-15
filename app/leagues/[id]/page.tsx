import Navbar from "@/components/Header";
import { LeagueHomePageMain } from "@/components/League/leaguePageNav";
import { PageNotFound } from "@/components/PageNotFound";
import { leagueHomePage } from "@/libs/models/LeagueDEMO";

interface LeaguePageProps {
  params: {
    id: string;
  };
}

const LeaguePage: React.FC<LeaguePageProps> = async ({ params }) => {
  const { id } = await params;
  const league = fetchLeague(id);

  return league ? (
    <div>
      <Navbar activeTab={-1} />
      <LeagueHomePageMain
        leagueName={"Olympus Smite Leage"}
        divisions={leagueHomePage.divisions}
        platforms={[]}
        server={""}
        draft={""}
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

function fetchLeague(id: string | number) {
  return id === "OSL" ? "osl" : null; // TO DO CHANGE THIS TO PROPER FETCHING METHOD.
}

export default LeaguePage;
