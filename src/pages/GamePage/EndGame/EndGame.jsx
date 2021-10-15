import { useGameState } from "../../../store/GameContext";
import { useHistory } from "react-router-dom";
import styles from "./endGame.module.css";

export const EndGame = () => {
  const history = useHistory();
  const gameStates = useGameState();

  return (
    <div className={styles.wrap}>
      <div className={styles.modal}>
        <h2 className={styles.header}>Congratulation! You did it!</h2>
        <p className={styles.text}>Game level: {gameStates.level}</p>
        <p className={styles.text}>Your time: {gameStates.resultTime}</p>
        <p className={styles.text}>Number of steps: {gameStates.steps}</p>
        <button
          className={styles.button}
          onClick={() => {
            history.push("/MainPage");
            gameStates.setEndGame(false);
            gameStates.setResultTime("");
            gameStates.setTime(["0", "0"]);
            gameStates.setSteps(0);
            gameStates.setSolved("0");
            gameStates.setLevel("");
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
};
