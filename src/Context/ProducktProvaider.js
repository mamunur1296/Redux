import React, { createContext, useContext } from "react";
const PRODUCKT_CONTEXT = createContext();

const ProducktProvaider = ({ children }) => {
  const data = { name: "mamun" };
  const value = { data };
  return (
    <>
      <PRODUCKT_CONTEXT.Provider value={value}>
        {children}
      </PRODUCKT_CONTEXT.Provider>
    </>
  );
};
export const useProduckt = () => {
  const context = useContext(PRODUCKT_CONTEXT);
  return context;
};

export default ProducktProvaider;
