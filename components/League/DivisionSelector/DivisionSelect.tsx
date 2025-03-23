import React from "react";
import { useDivision } from "./DivisionContext";
import { Division } from "@/libs/Types/League";

const DivisionSelect: React.FC<{ divisions: Division[] }> = ({ divisions }) => {
  const { activeDivision, setActiveDivision } = useDivision();

  // Handle division change
  const handleDivisionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDivisionId = e.target.value;
    const selectedDivision = divisions.find(
      (div) => div.division_id.toString() === selectedDivisionId
    );

    if (selectedDivision) {
      // Update both division_name and division_id
      setActiveDivision([selectedDivision.division_name, selectedDivision.division_id]);
    }
  };

  return (
    <select
      name="status"
      aria-label="Choose a division"
      className="bg-transparent"
      value={activeDivision[1]} // Use division_id as the value
      onChange={handleDivisionChange}
    >
      {divisions.map((div) => (
        <option key={div.division_id} value={div.division_id}>
          {div.division_name}
        </option>
      ))}
    </select>
  );
};

export default DivisionSelect;