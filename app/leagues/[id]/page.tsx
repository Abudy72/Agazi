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
        playerstats={[{
          playerName: "Player1",
          kills: 10,
          deaths: 2,
          assists: 5,
          role: "Jungle",
          wins: 3,
          dmg_dealt: 12000,
          dmg_mitigated: 8000,
          dmg_struct: 3000,
          healing: 1500,
          gold: 10000,
          distance: 500,
          losses: 4,
          dmg_taken: 0
        },
        {
          playerName: "Weak3n",
          kills: 10,
          deaths: 2,
          assists: 5,
          role: "Solo",
          wins: 3,
          dmg_dealt: 12000,
          dmg_mitigated: 8000,
          dmg_struct: 3000,
          healing: 1500,
          gold: 10000,
          distance: 500,
          losses: 1,
          dmg_taken: 0
        },
        {
          playerName: "Paul",
          kills: 10,
          deaths: 2,
          assists: 5,
          role: "Mid",
          wins: 3,
          dmg_dealt: 12000,
          dmg_mitigated: 8000,
          dmg_struct: 3000,
          healing: 1500,
          gold: 10000,
          distance: 500,
          losses: 3,
          dmg_taken: 0
        },
        {
          playerName: "SoloOrTroll",
          kills: 10,
          deaths: 2,
          assists: 5,
          role: "Carry",
          wins: 3,
          dmg_dealt: 12000,
          dmg_mitigated: 8000,
          dmg_struct: 3000,
          healing: 1500,
          gold: 10000,
          distance: 500,
          losses: 7,
          dmg_taken: 0
        },
        {
          playerName: "PolarBearMike",
          kills: 10,
          deaths: 2,
          assists: 5,
          role: "Support",
          wins: 3,
          dmg_dealt: 12000,
          dmg_mitigated: 8000,
          dmg_struct: 3000,
          healing: 1500,
          gold: 10000,
          distance: 500,
          losses: 1,
          dmg_taken: 0
        }]}
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
