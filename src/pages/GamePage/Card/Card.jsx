import React, { useEffect, useState } from "react";
import styles from "./card.module.css";
import cardFront from "../../../images/cardFront.png";
import { useImages } from "../../../store/ImageContext";

export const Card = ({ cardBack, cardName }) => {
  const openCardsArray = useImages();
  const [isActive, setActive] = useState("false");

  const toggleClass = () => {
    setActive(!isActive);
  };
  const handleClick = () => {
    if (openCardsArray.openCards.length === 1) {
      openCardsArray.setOpenCards([...openCardsArray.openCards, cardName]);
    } else {
      openCardsArray.setOpenCards([cardName]);
    }
  };

  useEffect(() => {
    console.log(openCardsArray.openCards);
  }, [openCardsArray.openCards]);

  return (
    <div className={`${styles.scene}`} onClick={handleClick}>
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
  );
};
