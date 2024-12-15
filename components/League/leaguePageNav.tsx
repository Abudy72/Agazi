"use client";
import React, { useState } from "react";
import { StatsDataTableComponent } from "../StatsDataTableComponent";
import { DivisionProvider, useDivision } from "./DivisionSelector/DivisionContext";
import DivisionSelect from "./DivisionSelector/DivisionSelect";

export interface LeagueHomePageProps {
  leagueName: string;
  divisions: string[];
  platforms: string[];
  server: string;
  draft: string;
}

export const LeagueHomePageMain: React.FC<LeagueHomePageProps> = (props) => {
  const [activeTab, setActiveTab] = useState("Standings");

  return (
    <DivisionProvider initialDivision={props.divisions[0]}>
      <div>
        <div className="flex flex-wrap justify-center p-2 bg-blue text-darkYellow">
          {/* DivisionSelect */}
          <DivisionSelect divisions={props.divisions} />
          <div>
            {/* Navbar */}
            <div className="flex space-x-4 bg-blue text-white p-4">
              {["Standings", "Stats", "Brackets", "VODs", "Schedule"].map(
                (item) => (
                  <div
                    key={item}
                    className={`cursor-pointer ${
                      activeTab === item ? "font-bold underline" : ""
                    }`}
                    onClick={() => setActiveTab(item)}
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        {/* Only this section rerenders */}
        <DynamicSection activeTab={activeTab} />
      </div>
    </DivisionProvider>
  );
};


const Standings = () => <div>Standings Component</div>;
const Stats: React.FC<{ division: string }> = ({ division }) => {
  return (
    <div>
      <StatsDataTableComponent division={division} />
    </div>
  );
};
const Brackets = () => <div>Brackets Component</div>;
const VODs = () => <div>VODs Component</div>;
const Schedule = () => <div>Schedule Component</div>;

const DynamicSection: React.FC<{ activeTab: string }> = ({ activeTab }) => {
  const { activeDivision } = useDivision();
  const renderSection = () => {
    switch (activeTab) {
      case "Standings":
        return <Standings />;
      case "Stats":
        return <Stats division={activeDivision} />;
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

  return <div className="p-4">{renderSection()}</div>;
};