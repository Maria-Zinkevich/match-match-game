import styles from "./gameLevel.module.css";

export const GameLevel = () => {
  return (
    <div className={styles.gameLevel}>
      <h3 className={styles.gameLevelTitle}>Choose a game level</h3>
      <ul className={styles.gameLevelList}>
        <li className={styles.gameLevelItem}>
          <input
            type="button"
            id="easy"
            name="levelInput"
            value="Easy "
            className={styles.gameLevelInput}
          />
        </li>
        <li className={styles.gameLevelItem}>
          <input
            type="button"
            id="medium"
            name="levelInput"
            value="Medium"
            className={styles.gameLevelInput}
          />
        </li>
        <li className={styles.gameLevelItem}>
          <input
            type="button"
            id="hard"
            name="levelInput"
            value="Hard"
            className={styles.gameLevelInput}
          />
        </li>
      </ul>
    </div>
  );
};
