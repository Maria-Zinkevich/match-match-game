import { GameBoard } from "./GameBoard/GameBoard";
import styles from "./gamePage.module.css";

export const GamePage = () => {
  return (
    <div className={styles.page}>
      <GameBoard />;
    </div>
  );
};
