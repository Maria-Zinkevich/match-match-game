import React, { useState } from "react";
import styles from "./card.module.css";
import cardFront from "../../../images/cardFront.png";
import aClubs from "../../../images/aClubs.png";

export const Card = () => {
  const [isActive, setActive] = useState("false");
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div className={`${styles.scene}`}>
      <div
        className={isActive ? `${styles.card}` : `${styles.isFlipped}`}
        onClick={toggleClass}
      >
        <div className={`${styles.cardFace} ${styles.cardFaceFront}`}>
          <img src={cardFront} alt="Front card" />
        </div>
        <div className={`${styles.cardFace} ${styles.cardFaceBack}`}>
          <img src={aClubs} alt="Back card" />
        </div>
      </div>
    </div>
  );
};
