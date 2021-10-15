import { createContext, useState, useContext } from "react";

const gameContext = createContext();

export const GameProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [cardSuit, setcardSuit] = useState("spadesCards");
  const [numberOfCardPairs, setNumberOfCardPairs] = useState(6);
  const [level, setLevel] = useState("");
  const [openCards, setOpenCards] = useState([]);
  const [flipped, setFlipped] = useState("false");
  const [solved, setSolved] = useState("0");
  const [steps, setSteps] = useState(0);
  const [time, setTime] = useState(["0", "0"]);
  const [resultTime, setResultTime] = useState("");
  const [endGame, setEndGame] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [gameData, setGameData] = useState({});
  const [gameHistory, setGameHistory] = useState([]);

  return (
    <gameContext.Provider
      value={{
        cardSuit,
        setcardSuit,
        numberOfCardPairs,
        setNumberOfCardPairs,
        level,
        setLevel,
        cards,
        setCards,
        openCards,
        setOpenCards,
        flipped,
        setFlipped,
        solved,
        setSolved,
        steps,
        setSteps,
        time,
        resultTime,
        setResultTime,
        setTime,
        endGame,
        setEndGame,
        userName,
        setUserName,
        userEmail,
        setUserEmail,
        gameData,
        setGameData,
        gameHistory,
        setGameHistory,
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
