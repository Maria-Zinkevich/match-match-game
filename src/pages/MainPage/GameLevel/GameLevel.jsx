import { useGameState } from "../../../store/GameContext";
import styles from "./gameLevel.module.css";

export const GameLevel = () => {
  const gameStates = useGameState();

  return (
    <div className={styles.gameLevel}>
      <h3 className={styles.gameLevelTitle}>Choose a game level</h3>
      <ul className={styles.gameLevelList}>
        <li className={styles.gameLevelItem}>
          <input
            type="button"
            id="easy"
            name="levelInput"
            value="Easy"
            className={styles.gameLevelInput}
            onClick={() => gameStates.setLevel(3)}
          />
        </li>
        <li className={styles.gameLevelItem}>
          <input
            type="button"
            id="medium"
            name="levelInput"
            value="Medium"
            className={styles.gameLevelInput}
            onClick={() => gameStates.setLevel(6)}
          />
        </li>
        <li className={styles.gameLevelItem}>
          <input
            type="button"
            id="hard"
            name="levelInput"
            value="Hard"
            className={styles.gameLevelInput}
            onClick={() => gameStates.setLevel(9)}
          />
        </li>
      </ul>
    </div>
  );
};
