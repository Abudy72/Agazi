import React, { createContext, useContext, useState, ReactNode } from "react";

interface DivisionContextProps {
  activeDivision: string;
  setActiveDivision: (division: string) => void;
}

const DivisionContext = createContext<DivisionContextProps | undefined>(
  undefined
);

export const DivisionProvider: React.FC<{
  initialDivision: string;
  children: ReactNode;
}> = ({ initialDivision, children }) => {
  const [activeDivision, setActiveDivision] = useState(initialDivision);

  return (
    <DivisionContext.Provider value={{ activeDivision, setActiveDivision }}>
      {children}
    </DivisionContext.Provider>
  );
};

export const useDivision = () => {
  const context = useContext(DivisionContext);
  if (!context) {
    throw new Error("useDivision must be used within a DivisionProvider");
  }
  return context;
};
