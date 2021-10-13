import { EndGame } from "../GamePage/EndGame/EndGame";
import { useGameState } from "../../store/GameContext";
import { GameBoard } from "./GameBoard/GameBoard";
import styles from "./gamePage.module.css";
import { Header } from "./Header/Header";

export const GamePage = () => {
  const gameStates = useGameState();
  return gameStates.endGame === true ? (
    <div className={styles.page}>
      <EndGame />
    </div>
  ) : (
    <div className={styles.page}>
      <Header />
      <GameBoard />
    </div>
  );
};
