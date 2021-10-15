import { EndGame } from "../GamePage/EndGame/EndGame";
import { useGameState } from "../../store/GameContext";
import { GameBoard } from "./GameBoard/GameBoard";
import styles from "./gamePage.module.css";
import { Header } from "./Header/Header";
import { useEffect } from "react";

export const GamePage = () => {
  const gameStates = useGameState();
  let historyGame = [];

  useEffect(() => {
    if (gameStates.endGame === true) {
      gameStates.setGameData({
        level: gameStates.level,
        time: gameStates.resultTime,
        steps: gameStates.steps,
      });
    }
  }, [gameStates.endGame]);

  useEffect(() => {
    if (gameStates.endGame === true) {
      if (localStorage.getItem(`${gameStates.userEmail}-game-history`)) {
        historyGame = JSON.parse(
          localStorage.getItem(`${gameStates.userEmail}-game-history`)
        );
      }
      historyGame.push(gameStates.gameData);
      localStorage.setItem(
        `${gameStates.userEmail}-game-history`,
        JSON.stringify(historyGame)
      );
    }
  }, [gameStates.gameData]);

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
