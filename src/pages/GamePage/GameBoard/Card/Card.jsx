import React, { useEffect, useState } from "react";
import styles from "./card.module.css";
import cardFront from "../../../../images/cardFront.png";
import { useGameState } from "../../../../store/GameContext";

export const Card = ({ id, cardBack, cardName, hide, handleClick }) => {
  const gameStates = useGameState();

  const [isActive, setActive] = useState("false");

  const toggleClass = () => {
    if (gameStates.openCards.length === 2) {
      return false;
    }

    setActive(!isActive);
  };

  useEffect(() => {
    if (gameStates.openCards.length === 2 && gameStates.flipped) {
      setActive("false");
      gameStates.setOpenCards([]);
      gameStates.setFlipped("false");
    }
  }, [gameStates.flipped]);

  return (
    <div
      className={`${styles.scene}`}
      onClick={() => handleClick(cardName, id)}
    >
      <div className={hide ? `${styles.isMached}` : `${styles.card}`}>
        <div
          className={isActive ? `${styles.card}` : `${styles.isFlipped}`}
          onClick={toggleClass}
        >
          <div className={`${styles.cardFace} ${styles.cardFaceFront}`}>
            <img src={cardFront} alt="Front card" />
          </div>
          <div className={`${styles.cardFace} ${styles.cardFaceBack}`}>
            <img src={cardBack} alt="Back card" />
          </div>
        </div>
      </div>
    </div>
  );
};
