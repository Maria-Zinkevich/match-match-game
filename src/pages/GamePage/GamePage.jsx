import React, { useEffect, useState } from "react";
import { Card } from "./Card/Card";
import styles from "./gamePage.module.css";
import {
  spadesCards,
  heartCards,
  diamondCards,
  clubsCards,
} from "./importCards";

export const GamePage = () => {
  const [cards, setCards] = useState([]);

  const mixCards = (array) => {
    const newArray = array.slice(0);
    for (let i = 0; i < array.length - 1; i += 1) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const temp = newArray[i];
      newArray[i] = newArray[randomIndex];
      newArray[randomIndex] = temp;
    }
    return newArray;
  };

  const createDeck = () => {
    let id = 0;
    const resultCards = heartCards.slice(0, 3).reduce((result, type) => {
      result.push({
        id: (id += 1),
        type: type.card,
      });
      result.push({
        id: (id += 1),
        type: type.card,
      });
      return result;
    }, []);
    return mixCards(resultCards);
  };

  useEffect(() => {
    setCards(createDeck());
  }, []);

  return (
    <div className={`${styles.board}`}>
      {cards.map((card) => {
        return <Card key={card.id} id={card.id} cardBack={card.type} />;
      })}
    </div>
  );
};
