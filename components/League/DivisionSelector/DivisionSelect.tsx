// DivisionSelect.tsx
import React from "react";
import { useDivision } from "./DivisionContext";
import { Division } from "@/libs/Types/League";

const DivisionSelect: React.FC<{ divisions: Division[] }> = ({ divisions }) => {
  const { activeDivision, setActiveDivision } = useDivision();
  return (
    <select
      name="status"
      aria-label="Choose a division"
      className="bg-transparent"
      value={activeDivision[0]}
      onChange={(e) => setActiveDivision([e.target.value, activeDivision[1]])}
    >
      {divisions.map((div, index) => (
        <option key={index} value={div.division_id}>
          {div.division_name}
        </option>
      ))}
    </select>
  );
};

export default DivisionSelect;
