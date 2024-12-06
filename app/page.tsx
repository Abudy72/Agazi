import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
import LeagueCard from "@/components/League/leagueCards";
import UpcomingMatchCard from "@/components/Matches/UpcomingMatches";
import { divisions, platforms } from "@/mockData";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <LeagueCard
        leagueName={"Quacken Smite League"}
        divisions={divisions}
        platforms={platforms}
        server={"NA"}
        draft={"BYOT"}
      />
      <br></br>
      <UpcomingMatchCard
        leagueName={"Olympus Smite League"}
        division={"Athens"}
        teamA={"Royal Jesters"}
        teamB={"The Crew"}
        time={new Date()}
      />
      <Footer/>
      
    </div>
  );
}
