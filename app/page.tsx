import LeagueCard from "@/components/League/leagueCards";
import UpcomingMatchCard from "@/components/Matches/UpcomingMatches";

export default function Home() {
 return (
  
  <div>
    <LeagueCard/><br></br>
    <UpcomingMatchCard leagueName={"Olympus Smite League"} division={"Athens"} teamA={"Royal Jesters"}
     teamB={"The Crew"} time={new Date()}/>
  </div>
 )
}
