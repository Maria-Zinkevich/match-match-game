import React, { useCallback, useEffect, useState } from "react";
import { useGameState } from "../../../store/GameContext";

import { Card } from "./Card/Card";
import styles from "./gameBoard.module.css";
import {
  spadesCards,
  heartCards,
  diamondCards,
  clubsCards,
} from "./importCards";

export const GameBoard = () => {
  const gameStates = useGameState();

  const removeMatchedCards = (array, card) => {
    const filteredItems = array.filter((item) => item.name !== card);
    gameStates.setCards(filteredItems);
    gameStates.setOpenCards([]);
  };

  const flipNotMatchedCards = () => {
    gameStates.setFlipped("true");
    gameStates.setOpenCards([]);
  };

  const isMatch = () => {
    let result =
      gameStates.openCards[0].card === gameStates.openCards[1].card
        ? removeMatchedCards(gameStates.cards, gameStates.openCards[0].card)
        : flipNotMatchedCards();
    gameStates.setSolved(result);
  };

  const handleClick = (card, cardId) => {
    if (gameStates.openCards.length < 2) {
      gameStates.setOpenCards([...gameStates.openCards, { card, cardId }]);
    }
  };

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
    const resultCards = heartCards.slice(0, 6).reduce((result, type) => {
      result.push({
        id: (id += 1),
        type: type.card,
        name: type.name,
      });
      result.push({
        id: (id += 1),
        type: type.card,
        name: type.name,
      });
      return result;
    }, []);
    return mixCards(resultCards);
  };

  useEffect(() => {
    gameStates.setCards(createDeck());
  }, []);

  useEffect(() => {
    if (gameStates.openCards.length === 2) {
      if (gameStates.openCards[0].cardId === gameStates.openCards[1].cardId) {
        gameStates.setOpenCards([]);
        return null;
      }
      setTimeout(isMatch, 1000);
    }
  }, [gameStates.openCards]);

  return (
    <div className={`${styles.board}`}>
      {gameStates.cards.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            cardBack={card.type}
            cardName={card.name}
            handleClick={() => handleClick(card.name, card.id)}
          />
        );
      })}
    </div>
  );
};
