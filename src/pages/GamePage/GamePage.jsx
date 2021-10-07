import { GameBoard } from "./GameBoard/GameBoard";
import styles from "./gamePage.module.css";
import { Header } from "./Header/Header";

export const GamePage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <GameBoard />;
    </div>
  );
};
