import styles from "./cardSuits.module.css";

import aceClubs from "../../../images/clubs/aceClubs.png";
import aceDiamond from "../../../images/diamond/aceDiamond.png";
import aceHeart from "../../../images/heart/aceHeart.png";
import aceSpades from "../../../images/spades/aceSpades.png";
import { useGameState } from "../../../store/GameContext";

export const CardSuits = () => {
  const gameStates = useGameState();
  return (
    <div className={styles.cardSuits}>
      <h3 className={styles.cardSuitsTitle}>Choose card suit</h3>
      <div className={styles.cardSuitsContainer}>
        <img
          alt="clubs"
          src={aceClubs}
          className={styles.card}
          id="clubs"
          onClick={() => gameStates.setcardSuit("clubsCards")}
        />
        <img
          alt="diamond"
          src={aceDiamond}
          className={styles.card}
          id="diamond"
          onClick={() => gameStates.setcardSuit("diamondCards")}
        />
        <img
          alt="spades"
          src={aceSpades}
          className={styles.card}
          id="spades"
          onClick={() => gameStates.setcardSuit("spadesCards")}
        />
        <img
          alt="heart"
          src={aceHeart}
          className={styles.card}
          id="heart"
          onClick={() => gameStates.setcardSuit("heartCards")}
        />
      </div>
    </div>
  );
};
