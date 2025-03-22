import { useState } from "react";

export const StandingsTableComponent: React.FC<{ division: [string,number] }> = ({
  division,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const data = fetchTeamStandings(division[0]);


  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + rowsPerPage);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="p-2">
      {/* Table */}
      <div className="overflow-x-auto rounded-md border border-gray-300">
        <table className="min-w-full text-sm">
          <thead className="bg-blue text-darkYellow font-semibold">
            <tr>
              <th className="px-4 py-2 text-center">Rank</th>
              <th className="px-4 py-2 text-left">Team</th>
              <th className="px-4 py-2 text-center">Points</th>
              <th className="px-4 py-2 text-center">Games Won</th>
              <th className="px-4 py-2 text-center">Sets Won</th>
              <th className="px-4 py-2 text-center">Total Sets</th>
              <th className="px-4 py-2 text-center">MatchHistory</th>
            </tr>
          </thead>
          <tbody className="bg-primaryBG text-white">
            {paginatedData.map((row, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-3 text-center">{index + 1}</td>
                <td className="px-4 py-2 text-left">{row.teamName}</td>
                <td className="px-4 py-2 text-center">{row.points}</td>
                <td className="px-4 py-2 text-center">{row.gamesWon}</td>
                <td className="px-4 py-2 text-center">{row.setsWon}</td>
                <td className="px-4 py-2 text-center">{row.totalSets}</td>
                <td className="px-4 py-2 text-center flex flex-row justify-center space-x-2">
                {row.matchHistory
                    .split("")
                    .map((r, index) =>
                      r === "W" ? (
                        <span key={index} className="rounded-xl font-bold bg-green-500 w-7 h-5">W</span>
                      ) : (
                        <span key={index} className="rounded-xl bg-red-500 font-bold w-7">L</span>
                      )
                    )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="sticky left-0 md:flex md:flex-row justify-center p-2 mt-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="bg-gray-200 p-2 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-darkYellow m-2">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="bg-gray-200 p-2 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

function fetchTeamStandings(division: string) {
    const d1 = [
      {
        points: 50,
        teamName: "Royal Jesters",
        matchHistory: "WLLW",
        gamesWon: 8,
        setsWon: 3,
        totalSets: 11
      },
      {
        points: 75,
        teamName: "Royal Jesters",
        matchHistory: "WLLW",
        gamesWon: 8,
        setsWon: 3,
        totalSets: 11
      },
      {
        points: 89,
        teamName: "Royal Jesters",
        matchHistory: "WLLW",
        gamesWon: 8,
        setsWon: 3,
        totalSets: 11
      },
      {
        points: 95,
        teamName: "Royal Jesters",
        matchHistory: "WLLW",
        gamesWon: 8,
        setsWon: 3,
        totalSets: 11
      },
      {
        points: 89,
        teamName: "Royal Jesters",
        matchHistory: "WLLW",
        gamesWon: 8,
        setsWon: 3,
        totalSets: 11
      },
      {
        points: 41,
        teamName: "Royal Jesters",
        matchHistory: "WLLW",
        gamesWon: 8,
        setsWon: 3,
        totalSets: 11
      },
      {
        points: 120,
        teamName: "Royal Jesters",
        matchHistory: "WLLW",
        gamesWon: 8,
        setsWon: 3,
        totalSets: 11
      },

    ] 

    return d1.sort((a, b) => b.points - a.points)
}
