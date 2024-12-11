"use client";
import { Select } from "@headlessui/react";
import React, { useState } from "react";
import { DataTableComponent, PlayerStatsProps } from "../CustomTable";

export interface LeagueHomePageProps {
  leagueName: string;
  divisions: string[];
  platforms: string[];
  server: string;
  draft: string;

  playerstats?: PlayerStatsProps[];
}

export const LeagueHomePageMain: React.FC<LeagueHomePageProps> = (prop) => {
  const [activeDivision, setActiveDivision] = useState(prop.divisions[0]);
  // Render the section based on the active state
  const renderSection = () => {
    switch (activeDivision) {
      case "Standings":
        return <Standings />;
      case "Stats":
        return <Stats
        stats={prop.playerstats ? prop.playerstats : []}
      />;
      case "Brackets":
        return <Brackets />;
      case "VODs":
        return <VODs />;
      case "Schedule":
        return <Schedule />;
      default:
        return <Standings />;
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-center bg-blue text-darkYellow">
        <Select
          name="status"
          aria-label="Choose a division"
          className="bg-transparent"
          value={activeDivision}
          onChange={(e) => setActiveDivision(e.target.value)}
        >
          {prop.divisions.map((div, index) => (
            <option key={index} value={div}>
              {div}
            </option>
          ))}
        </Select>
        <div>
          {/* Navbar */}
          <div className="flex space-x-4 bg-blue text-white p-4">
            {["Standings", "Stats", "Brackets", "VODs", "Schedule"].map(
              (item) => (
                <div
                  key={item}
                  className={`cursor-pointer ${
                    activeDivision === item ? "font-bold underline" : ""
                  }`}
                  onClick={() => setActiveDivision(item)}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="p-4">{renderSection()}</div>
    </div>
  );
};

const Standings = () => <div>Standings Component</div>;
const Stats: React.FC<{stats: PlayerStatsProps[] }> = ({ stats }) =>  {
  return (
    <div>
      <DataTableComponent stats={stats} />
    </div>
  );
};
const Brackets = () => <div>Brackets Component</div>;
const VODs = () => <div>VODs Component</div>;
const Schedule = () => <div>Schedule Component</div>;
