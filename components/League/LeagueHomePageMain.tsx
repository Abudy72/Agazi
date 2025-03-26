"use client";
import React, { useState } from "react";
import { StatsDataTableComponent } from "./StatsDataTableComponent";
import { DivisionProvider, useDivision } from "./DivisionSelector/DivisionContext";
import DivisionSelect from "./DivisionSelector/DivisionSelect";
import { StandingsTableComponent } from "./Standings";
import { Division } from "@/libs/Types/League";
export interface LeagueHomePageProps {
  divisions: Division[];
}

export const LeagueHomePageMain: React.FC<LeagueHomePageProps> = (props) => {
  const [activeTab, setActiveTab] = useState("Stats");

  return (
    <DivisionProvider initialDivision={[props.divisions[0].division_name,props.divisions[0].division_id]}>
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


const Standings: React.FC<{ division: [string,number] }> = ({ division }) => <div><StandingsTableComponent division={division}/></div>;
const Stats: React.FC<{ division: [string,number] }> = ({ division }) => {
  return (
    <div>
      <StatsDataTableComponent division={division} />
    </div>
  );
};
const Brackets: React.FC = () => {
  return <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Tournament Brackets</h1>
  </div>;
}
const VODs = () => <div>VODs Component</div>;
const Schedule = () => <div>Schedule Component</div>;

const DynamicSection: React.FC<{ activeTab: string }> = ({ activeTab }) => {
  const { activeDivision } = useDivision();
  console.log(activeDivision[0])
  const renderSection = () => {
    switch (activeTab) {
      case "Standings":
        return <Standings  division={activeDivision} />;
      case "Stats":
        return <Stats division={activeDivision} />;
      case "Brackets":
        return <Brackets />;
      case "VODs":
        return <VODs />;
      case "Schedule":
        return <Schedule />;
      default:
        return <Standings division={activeDivision} />;
    }
  };

  return <div className="p-4">{renderSection()}</div>;
};