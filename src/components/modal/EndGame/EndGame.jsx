import { useGameState } from "../../../store/GameContext";
import styles from "./endGame.module.css";

export const EndGame = () => {
  const gameStates = useGameState();

  return (
    <div className={styles.wrap}>
      <div className={styles.modal}>
        <h2 className={styles.header}>Congratulation! You did it!</h2>
        <p className={styles.text}>Your time: {gameStates.resultTime}</p>
        <p className={styles.text}>Number of steps: {gameStates.steps}</p>
        <button className={styles.button}>OK</button>
      </div>
    </div>
  );
};
