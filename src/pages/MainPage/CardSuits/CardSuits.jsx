import styles from "./cardSuits.module.css";

import aceClubs from "../../../images/clubs/aceClubs.png";
import aceDiamond from "../../../images/diamond/aceDiamond.png";
import aceHeart from "../../../images/heart/aceHeart.png";
import aceSpades from "../../../images/spades/aceSpades.png";

export const CardSuits = () => {
  return (
    <div className={styles.cardSuits}>
      <h3 className={styles.cardSuitsTitle}>Choose card suit</h3>
      <div className={styles.cardSuitsContainer}>
        <img alt="clubs" src={aceClubs} className={styles.card} id="clubs" />
        <img
          alt="diamond"
          src={aceDiamond}
          className={styles.card}
          id="diamond"
        />
        <img alt="spades" src={aceSpades} className={styles.card} id="spades" />
        <img alt="heart" src={aceHeart} className={styles.card} id="heart" />
      </div>
    </div>
  );
};
