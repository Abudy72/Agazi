// DivisionSelect.tsx
import React from "react";
import { useDivision } from "./DivisionContext";

const DivisionSelect: React.FC<{ divisions: string[] }> = ({ divisions }) => {
  const { activeDivision, setActiveDivision } = useDivision();
  return (
    <select
      name="status"
      aria-label="Choose a division"
      className="bg-transparent"
      value={activeDivision}
      onChange={(e) => setActiveDivision(e.target.value)}
    >
      {divisions.map((div, index) => (
        <option key={index} value={div}>
          {div}
        </option>
      ))}
    </select>
  );
};

export default DivisionSelect;
