import { PlayerStats } from '@/libs/util/stats';
import { useEffect, useState } from 'react';

export const StatsDataTableComponent: React.FC<{ division: [string,number] }> = ({ division }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState<PlayerStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof PlayerStats;
    direction: 'ascending' | 'descending';
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/stats/${division[1]}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [division]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const requestSort = (key: keyof PlayerStats) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data];
  if (sortConfig !== null) {
    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }

  const filteredData = sortedData.filter((player) =>
    player.player_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + rowsPerPage);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

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

  // Helper function to render sortable header
  const renderSortableHeader = (key: keyof PlayerStats, label: string) => {
    return (
      <th 
        className="px-4 py-3 text-center cursor-pointer hover:bg-blue-700"
        onClick={() => requestSort(key)}
      >
        <div className="flex items-center justify-center">
          {label}
          {sortConfig?.key === key && (
            <span className="ml-1">
              {sortConfig.direction === 'ascending' ? '↑' : '↓'}
            </span>
          )}
        </div>
      </th>
    );
  };

  return (
    <div className="p-2">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
        <p className="flex flex-col items-center text-2xl text-darkYellow font-bold mb-4">{division[0]} Leaderboard</p>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Search players..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="block w-full max-w-md px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div className="overflow-x-auto rounded-md border border-gray-300">
            <table className="min-w-full text-md">
              <thead className="bg-blue text-darkYellow font-semibold">
                <tr>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-center">K/D/A</th>
                  {renderSortableHeader('wins', 'Wins')}
                  {renderSortableHeader('losses', 'Losses')}
                  {renderSortableHeader('total_damage_dealt', 'Player Damage')}
                  {renderSortableHeader('total_damage_mitigated', 'Damage Mitigated')}
                  {renderSortableHeader('total_structure_damage', 'Structure Damage')}
                  {renderSortableHeader('total_ally_healing', 'Ally Healing')}
                  {renderSortableHeader('total_wards_placed', 'Wards Placed')}
                  {renderSortableHeader('total_gold_earned', 'Gold Earned')}
                  {renderSortableHeader('total_xp_earned', 'Xp Earned')}
                  {renderSortableHeader('total_tower_kills', 'Tower Kills')}
                  {renderSortableHeader('total_pheonix_kills', 'Phenoix Kills')}
                  {renderSortableHeader('total_titan_kills', 'Titan Kills')}
                </tr>
              </thead>
              <tbody className="bg-primaryBG text-white">
                {paginatedData.map((player, index) => (
                  <tr key={index} className="border-t">
                    <td className="sticky z-10 left-0 px-4 py-2 bg-primaryBG">{player.player_name}</td>
                    <td className="px-4 py-3 text-center font-numbies">{player.total_kills}/{player.total_deaths}/{player.total_assists}</td>
                    <td className="px-4 py-3 text-center font-numbies">{player.wins}</td>
                    <td className="px-4 py-3 text-center font-numbies">{player.losses}</td>
                    <td className="px-4 py-3 text-center font-numbies">{player.total_damage_dealt.toLocaleString()}</td>
                    <td className="px-4 py-3 text-center font-numbies">{player.total_damage_mitigated.toLocaleString()}</td>
                    <td className="px-4 py-3 text-center font-numbies">{player.total_structure_damage.toLocaleString()}</td>
                    <td className="px-4 py-3 text-center font-numbies">{player.total_ally_healing.toLocaleString()}</td>
                    <td className="px-4 py-3 text-center font-numbies">{player.total_wards_placed.toLocaleString()}</td>
                    <td className="px-4 py-3 text-center font-numbies">{player.total_gold_earned.toLocaleString()}</td>
                    <td className="px-4 py-3 text-center font-numbies">{player.total_xp_earned.toLocaleString()}</td>
                    <td className="px-4 py-3 text-center font-numbies">{player.total_tower_kills.toLocaleString()}</td>
                    <td className="px-4 py-3 text-center font-numbies">{player.total_pheonix_kills.toLocaleString()}</td>
                    <td className="px-4 py-3 text-center font-numbies">{player.total_titan_kills.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="sticky left-0 md:flex md:flex-row justify-center p-2 mt-4">
              <button onClick={handlePrevPage} disabled={currentPage === 1} className="bg-gray-200 p-2 rounded disabled:opacity-50">Previous</button>
              <span className="text-darkYellow m-2">Page {currentPage} of {totalPages}</span>
              <button onClick={handleNextPage} disabled={currentPage === totalPages} className="bg-gray-200 p-2 rounded disabled:opacity-50">Next</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};