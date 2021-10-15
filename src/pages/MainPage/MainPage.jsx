import styles from "./mainPage.module.css";
import { useHistory } from "react-router-dom";

import { Header } from "./Header/Header";
import { Rules } from "./Rules/Rules";
import { CardSuits } from "./CardSuits/CardSuits";
import { GameLevel } from "./GameLevel/GameLevel";
import { useGameState } from "../../store/GameContext";

export const MainPage = () => {
  const history = useHistory();
  const gameStates = useGameState();
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
          <button
            className={styles.btnStartGame}
            onClick={() => {
              history.push("/GamePage");
              gameStates.setTime(["0", "0"]);
            }}
          >
            Start the game
          </button>
        </div>
      </div>
    </div>
  );
};
