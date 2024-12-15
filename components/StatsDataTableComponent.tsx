"use client";
import { useState } from "react";
import Image from "next/image"

export interface PlayerStatsProps {
  playerName: string;
  kills: number;
  deaths: number;
  assists: number;
  role: string; // CHANGE TO ENUM
  wins: number;
  losses: number;

  dmg_dealt: number;
  dmg_mitigated: number;
  dmg_taken: number;
  dmg_struct: number;
  healing: number;
  gold: number;
  distance: number;
}

export const StatsDataTableComponent: React.FC<{ division: string }> = ({
  division,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [sortedByRole, setSortedByRole] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const data = fetchPlayerStats(division);

  const handleSortByRole = () => {
    setSortedByRole((prev) => !prev);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((player) =>
    player.playerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedData = sortedByRole
    ? [...filteredData].sort((a, b) => a.role.localeCompare(b.role))
    : filteredData;

  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + rowsPerPage);

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

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
      {/* Search Bar */}
      <div className="mb-2">
        <input
          type="text"
          placeholder="Search players..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="block w-full max-w-md px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-400 focus:outline-none"
        />
        <button
          onClick={handleSortByRole}
          className="bg-transparent text-white p-2 rounded"
        >
          <Image className="relative" src="/sort.svg" width={30} height={30} alt="sort image" onClick={handleSortByRole}/>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-md border border-gray-300">
        <table className="min-w-full text-sm">
          <thead className="bg-blue text-darkYellow font-semibold">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-center">Role</th>
              <th className="px-4 py-2 text-center">K/D/A</th>
              <th className="px-4 py-2 text-center">Wins</th>
              <th className="px-4 py-2 text-center">Losses</th>
              <th className="px-4 py-2 text-center">Player Damage</th>
              <th className="px-4 py-2 text-center">Damage Mitigated</th>
              <th className="px-4 py-2 text-center">Damage Taken</th>
              <th className="px-4 py-2 text-center">Structure Damage</th>
              <th className="px-4 py-2 text-center">Healing</th>
              <th className="px-4 py-2 text-center">Gold</th>
              <th className="px-4 py-2 text-center">Distance Travelled</th>
            </tr>
          </thead>
          <tbody className="bg-primaryBG text-white">
            {paginatedData.map((row, index) => (
              <tr key={index} className="border-t">
                <td className="sticky z-10 left-0 px-4 py-2 bg-primaryBG">{row.playerName} </td>
                <td className="px-4 py-2 text-center">{row.role}</td>
                <td className="px-4 py-2">{row.kills}/{row.deaths}/{row.assists}</td>
                <td className="px-4 py-2 text-center">{row.wins}</td>
                <td className="px-4 py-2 text-center">{row.losses}</td>
                <td className="px-4 py-2 text-center">{row.dmg_dealt}</td>
                <td className="px-4 py-2 text-center">{row.dmg_mitigated}</td>
                <td className="px-4 py-2 text-center">{row.dmg_taken}</td>
                <td className="px-4 py-2 text-center">{row.dmg_struct}</td>
                <td className="px-4 py-2 text-center">{row.healing}</td>
                <td className="px-4 py-2 text-center">{row.gold}</td>
                <td className="px-4 py-2 text-center">{row.distance}</td>
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

function fetchPlayerStats(division: string) {
  const data1 = [
    {
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
      dmg_taken: 0,
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
      dmg_taken: 0,
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
      dmg_taken: 0,
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
      dmg_taken: 0,
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
      dmg_taken: 0,
    },
  ];

  const data2 = [
    {
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
      dmg_taken: 0,
    },
    {
      playerName: "Player2",
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
      dmg_taken: 0,
    },
    {
      playerName: "Player3",
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
      dmg_taken: 0,
    },
    {
      playerName: "Player4",
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
      dmg_taken: 0,
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
      dmg_taken: 0,
    },
    {
      playerName: "Player4",
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
      dmg_taken: 0,
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
      dmg_taken: 0,
    },
    {
      playerName: "Player4",
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
      dmg_taken: 0,
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
      dmg_taken: 0,
    },
    {
      playerName: "Player4",
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
      dmg_taken: 0,
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
      dmg_taken: 0,
    },
    {
      playerName: "Player4",
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
      dmg_taken: 0,
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
      dmg_taken: 0,
    },
    {
      playerName: "Player4",
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
      dmg_taken: 0,
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
      dmg_taken: 0,
    },
  ];

  return division === "Delphi" ? data1 : data2;
}
