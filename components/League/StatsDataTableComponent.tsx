import { PlayerStats } from '@/libs/util/stats';
import { useEffect, useState } from 'react';

export const StatsDataTableComponent: React.FC<{ division: [string,number] }> = ({ division }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState<PlayerStats[]>([]);
  const [loading, setLoading] = useState(true);

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
  };

  const filteredData = data.filter((player) =>
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

  return (
    <div className="p-2">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
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
                  <th className="px-4 py-3 text-center">Wins</th>
                  <th className="px-4 py-3 text-center">Losses</th>
                  <th className="px-4 py-3 text-center">Player Damage</th>
                  <th className="px-4 py-3 text-center">Damage Mitigated</th>
                  <th className="px-4 py-3 text-center">Structure Damage</th>
                  <th className="px-4 py-3 text-center">Ally Healing</th>
                  <th className="px-4 py-3 text-center">Wards Placed</th>
                  <th className="px-4 py-3 text-center">Gold Earned</th>
                  <th className="px-4 py-3 text-center">Xp Earned</th>
                  <th className="px-4 py-3 text-center">Tower Kills</th>
                  <th className="px-4 py-3 text-center">Phenoix Kills</th>
                  <th className="px-4 py-3 text-center">Titan Kills</th>
                </tr>
              </thead>
              <tbody className="bg-primaryBG text-white">
                {paginatedData.map((player, index) => (
                  <tr key={index} className="border-t">
                    <td className="sticky z-10 left-0 px-4 py-2 bg-primaryBG">{player.player_name}</td>
                    <td className="px-4 py-3 text-center">{player.total_kills}/{player.total_deaths}/{player.total_assists}</td>
                    <td className="px-4 py-3 text-center">{0}</td>
                    <td className="px-4 py-3 text-center">{0}</td>
                    <td className="px-4 py-3 text-center">{player.total_damage_dealt}</td>
                    <td className="px-4 py-3 text-center">{player.total_damage_mitigated}</td>
                    <td className="px-4 py-3 text-center">{player.total_structure_damage}</td>
                    <td className="px-4 py-3 text-center">{player.total_ally_healing}</td>
                    <td className="px-4 py-3 text-center">{player.total_wards_placed}</td>
                    <td className="px-4 py-3 text-center">{player.total_gold_earned}</td>
                    <td className="px-4 py-3 text-center">{player.total_xp_earned}</td>
                    <td className="px-4 py-3 text-center">{player.total_tower_kills}</td>
                    <td className="px-4 py-3 text-center">{player.total_pheonix_kills}</td>
                    <td className="px-4 py-3 text-center">{player.total_titan_kills}</td>
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
