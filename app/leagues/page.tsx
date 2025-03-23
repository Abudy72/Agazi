"use client"
import Navbar from "@/components/Header";
import LeaguesPage from "@/components/League/HomePage/LeagueDefaultPage";


export default function Home() {
  return (
    <div className="relative w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm overflow-auto">
      <Navbar activeTab={1} />
      
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-lightBlue bg-opacity-60 p-8 rounded-xl">
          <DivisionSelector />
        </div>
      </div>

      {/* <div className="flex flex-col items-center text-lightBlue">
        <span className="text-3xl mt-20">Featured Leagues</span>
        <Carousel prop={leaguesMOCKDATA} type={"league"} />
        <span className="text-3xl mt-20">Recent Matches</span>
        <Carousel prop={upcomingMatchesMOCKDATA} type={"match"} />
      </div> */}
      
      
    </div>
  );
}


// const RenderMatchResultsComponent = () => {
//   const res = fetchRecentMatches();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleLeftClick = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + res.length) % res.length
//     );
//   };

//   const handleRightClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % res.length);
//   };

//   const UseIsMobile = () => {
//     const [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//       const handleResize = () => {
//         setIsMobile(window.innerWidth <= 768);
//       };

//       // Initial check
//       handleResize();

//       window.addEventListener("resize", handleResize);
//       return () => {
//         window.removeEventListener("resize", handleResize);
//       };
//     }, []);

//     return isMobile;
//   };
  
//   const getVisibleCards = () => {
//     const isMobile = UseIsMobile();
//     const total = res.length;

//     if (isMobile) {
//       return [res[currentIndex]]; // Show only the current card on mobile
//     }

//     return [
//       res[(currentIndex - 1 + total) % total], // Previous card
//       res[currentIndex], // Current card
//       res[(currentIndex + 1) % total], // Next card
//     ];
//   };

//   return (
//     <div>
//       {/* Mobile View: Single Card with Slider */}
//       <div className="flex flex-row items-center md:hidden">
//         <button
//           onClick={handleLeftClick}
//           className="text-4xl text-lightYellow"
//         >
//           {"<"}
//         </button>
//         <MatchResultComponent
//           key={currentIndex}
//           match={res[currentIndex].match}
//           leagueName={res[currentIndex].leagueName}
//           division={res[currentIndex].division}
//           teamALogo={res[currentIndex].teamALogo}
//           teamBLogo={res[currentIndex].teamBLogo}
//           teamAWins={res[currentIndex].teamAWins}
//           teamBWins={res[currentIndex].teamBWins}
//           teamALosses={res[currentIndex].teamALosses}
//           teamBLosses={res[currentIndex].teamBLosses}
//         />
//         <button
//           onClick={handleRightClick}
//           className="text-4xl text-lightYellow"
//         >
//           {">"}
//         </button>
//       </div>

//       {/* Desktop View: Multiple Cards */}
//       <div className="hidden md:flex flex-row justify-center items-center space-x-4">
//         <button
//           onClick={handleLeftClick}
//           className="text-4xl text-lightYellow ml-4"
//         >
//           {"<"}
//         </button>
//         {getVisibleCards().map((match, index) => (
//           <MatchResultComponent
//             key={index + 1}
//             match={match.match}
//             leagueName={match.leagueName}
//             division={match.division}
//             teamALogo={match.teamALogo}
//             teamBLogo={match.teamBLogo}
//             teamAWins={match.teamAWins}
//             teamBWins={match.teamBWins}
//             teamALosses={match.teamALosses}
//             teamBLosses={match.teamBLosses}
//           />
//         ))}
//         <button
//           onClick={handleRightClick}
//           className="text-4xl text-lightYellow ml-4"
//         >
//           {">"}
//         </button>
//       </div>
//     </div>
//   );
// };

const DivisionSelector = () => {
  return <LeaguesPage/>
}
