import { createContext, useState, useContext } from "react";

const gameContext = createContext();

export const GameProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [openCards, setOpenCards] = useState([]);
  const [flipped, setFlipped] = useState("false");
  const [solved, setSolved] = useState("");

  return (
    <gameContext.Provider
      value={{
        cards,
        setCards,
        openCards,
        setOpenCards,
        flipped,
        setFlipped,
        solved,
        setSolved,
      }}
    >
      {children}
    </gameContext.Provider>
  );
};

export const useGameState = () => {
  const gameStates = useContext(gameContext);
  return gameStates;
};
