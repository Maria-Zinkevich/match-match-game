import styles from "./header.module.css";
import { useHistory } from "react-router-dom";
import { useGameState } from "../../../store/GameContext";

export const Header = () => {
  const gameStates = useGameState();
  const history = useHistory();
  return (
    <div className={styles.header}>
      <h2 className={styles.userName}>{gameStates.userName}</h2>
      <button
        onClick={() => {
          history.push("/WelcomePage");
        }}
      >
        Log out
      </button>
    </div>
  );
};
