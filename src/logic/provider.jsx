import React, { createContext, useContext, useState } from "react";

export const gameContext = createContext([[], () => {}]);

export default function ContextProvider({ children }) {
  const playersState = useState([]);

  return (
    <gameContext.Provider value={playersState}>
      {children}
    </gameContext.Provider>
  );
}

export const useGameState = () => {
  return useContext(gameContext)
}