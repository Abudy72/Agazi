// DivisionSelect.tsx
import React from "react";

type DivisionSelectProps = {
  divisions: string[];
  activeDivision: string;
  onChange: (value: string) => void;
};

const DivisionSelect: React.FC<DivisionSelectProps> = ({ divisions, activeDivision, onChange }) => {
  return (
    <select
      name="status"
      aria-label="Choose a division"
      className="bg-transparent"
      value={activeDivision}
      onChange={(e) => onChange(e.target.value)}
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
