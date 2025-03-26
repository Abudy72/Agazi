"use client";  // Ensure this component runs on the client

import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';

interface League {
  league_id: number;
  league_name: string;
  current_season: number;
}

const LeaguesPage = () => {
  const router = useRouter();
  const [leagues, setLeagues] = useState<League[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch leagues from the API
  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const response = await fetch('/api/league');
        const result = await response.json();

        // Validate the response and extract the `data` array
        if (result && Array.isArray(result.data)) {
          setLeagues(result.data);
        } else {
          throw new Error('Invalid data format');
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch leagues:', error);
        setLeagues([]); // Set leagues to an empty array in case of error
        setIsLoading(false);
      }
    };

    fetchLeagues();
  }, []);

  // Handle league selection
  const handleLeagueChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLeagueId = event.target.value;
    if (selectedLeagueId) {
      setIsLoading(true); // Trigger a loading state before navigation
      setTimeout(() => {
        router.push(`/leagues/${selectedLeagueId}`);
      }, 700); // Add a small delay to allow state to update
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Choose a League</h1>
      {isLoading ? (
        <p>Loading leagues...</p>
      ) : (
        <select
          onChange={handleLeagueChange}
          className="px-4 py-2 border border-black rounded-md shadow-sm focus:outline-none 
            focus:ring-2 focus:ring-blue-500 bg-lightBlue text-white"
        >
          <option value="">Select a league</option>
          {leagues.map((league) => (
            <option
              className="bg-blue text-white hover:bg-gray-700"
              key={league.league_id}
              value={league.league_id}
            >
              {league.league_name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default LeaguesPage;
