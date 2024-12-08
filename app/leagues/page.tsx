import Carousel from "@/components/CardCarousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
import { leaguesMOCKDATA, upcomingMatchesMOCKDATA } from "@/mockData";

export default function Home() {
  return (
    <div>
      <Navbar activeTab={1} />
      <div className="flex flex-col items-center text-lightBlue">
        <span className=" text-3xl md:-translate-x-80+">
          {" "}
          Featured Leagues{" "}
        </span>
        <Carousel prop={leaguesMOCKDATA} type={"league"}/>

        <span className=" text-3xl md:-translate-x-80+">
          {" "}
          Upcoming Matchs{" "}
        </span>
        <Carousel prop={upcomingMatchesMOCKDATA} type={"match"}/>
      </div>
      <Footer />
    </div>
  );
}
