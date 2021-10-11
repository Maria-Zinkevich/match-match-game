import styles from "./mainPage.module.css";

import { Header } from "./Header/Header";
import { Rules } from "./Rules/Rules";
import { CardSuits } from "./CardSuits/CardSuits";
import { GameLevel } from "./GameLevel/GameLevel";

export const MainPage = () => {
  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles.wrapInner}>
        <div className={styles.wrapInnerLeft}>
          <Rules />
          <GameLevel />
        </div>

        <div className={styles.wrapInnerRight}>
          <CardSuits />
          <button className={styles.btnStartGame}>Start the game</button>
        </div>
      </div>
    </div>
  );
};
