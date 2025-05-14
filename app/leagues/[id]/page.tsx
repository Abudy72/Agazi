import Custom404 from "@/app/not-found";
import Navbar from "@/components/Header";
import { LeagueHomePageMain } from "@/components/League/LeagueHomePageMain";
import LeagueInfo from "@/components/League/LeagueInfo";
import { getLeagueWithDivisions } from "@/libs/util/leagues";

export default async function Page({params}: {params: Promise<{ id: string }>}) {
  const  id  = Number((await params).id);
  const league = await getLeagueWithDivisions(Number(id));

  if (!league) {
    return (
      <div>
        <Custom404 />
      </div>
    );
  }

  return (
    <div>
      <Navbar activeTab={-1} />
      <LeagueInfo leagueInfo={league} />
      <LeagueHomePageMain divisions={league.divisions} />
    </div>
  );
}
