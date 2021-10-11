import { useEffect } from "react";
import { useGameState } from "../../../store/GameContext";
import styles from "./header.module.css";

export const Header = () => {
  const gameStates = useGameState();

  const gameLevel = () => {
    switch (gameStates.level) {
      case 3:
        return "easy";
      case 6:
        return "medium";
      case 9:
        return "hard";
      default:
        return null;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      let [min, sec] = gameStates.time;
      sec++;
      if (sec === 60) {
        min++;
        sec = 0;
      }
      gameStates.setTime([min, sec]);
    }, 1000);
  }, [gameStates.time]);

  const showTime = () => {
    const [min, sec] = gameStates.time;
    return `${min < 10 ? `0${min}` : min} : ${sec < 10 ? `0${sec}` : sec}`;
  };

  return (
    <div className={styles.header}>
      <div className={styles.wrap}>
        <h2 className={styles.userName}>UserName</h2>
        <button>End the game</button>
      </div>

      <div className={styles.infoContainer}>
        <p>Time: {showTime()}</p>
        <p>Level: {gameLevel()}</p>
        <p>Steps: {gameStates.steps}</p>
      </div>
    </div>
  );
};
