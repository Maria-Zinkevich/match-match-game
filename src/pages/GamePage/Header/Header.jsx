import { useEffect } from "react";
import { useGameState } from "../../../store/GameContext";
import styles from "./header.module.css";
import { useHistory } from "react-router-dom";

export const Header = () => {
  const gameStates = useGameState();
  const history = useHistory();

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
        <h2 className={styles.userName}>{gameStates.userName}</h2>
        <button
          onClick={() => {
            history.push("/MainPage");
            gameStates.setEndGame(false);
            gameStates.setResultTime("");
            gameStates.setTime(["0", "0"]);
            gameStates.setSteps(0);
            gameStates.setSolved("0");
          }}
        >
          End the game
        </button>
      </div>

      <div className={styles.infoContainer}>
        <p>Time: {showTime()}</p>
        <p>Level: {gameStates.level}</p>
        <p>Steps: {gameStates.steps}</p>
      </div>
    </div>
  );
};
