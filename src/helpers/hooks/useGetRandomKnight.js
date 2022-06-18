import { useEffect, useState } from "react";
import {knightsDataMedium} from "../data/knightsData";

export const useGetRandomKnight = () => {
  let diceKnightsToSummon = 1;

  const [knightAttributes, setKnightAttributes] = useState({
    name: "",
    health: 0,
    maxHealth: 0,
    attack: 0,
    defense: 0,
  });

  const [knightsInBoard, setKnightsInBoard] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getKnights = async () => {
      let knightsToAdd = [];

      for (let i = 0; i < diceKnightsToSummon; i++) {
        let diceKnights =
          Math.floor(Math.random() * (knightsDataMedium.length - 1)) + 1;
        knightsToAdd.push(knightsDataMedium[diceKnights]);
        setKnightsInBoard(knightsToAdd);
        knightsDataMedium.splice(diceKnights, 1);
      }

      setKnightAttributes({
        name: knightsToAdd[0].name,
        difficulty: knightsToAdd[0].difficulty,
        health: knightsToAdd[0].health,
        maxHealth: knightsToAdd[0].health,
        attack: knightsToAdd[0].attack,
        defense: knightsToAdd[0].defense,
      });
    };

    getKnights();

    setLoading(false);
  }, [loading]);

  return {
    knightAttributes,
    setKnightAttributes,
    loading,
    knightsInBoard,
  };
};
