import { useState } from "react";

export const useGetPlayerStats = () => {

  const [player, setPlayer] = useState({
    player: true,
    name: "",
    health: 500,
    maxHealth: 500,
    magic: 2,
    maxMagic: 2,
    attack: 5,
    defense: 30,
    removedAttack: 0,
    removedDefense: 0,
    frenzyAttack: 0,
    defendArmor: 0,
    vulnerabilityStatus: 0,
    weaknessStatus: 0,
    defenseStatus: 0,
    frenzyStatus: 0,
    portrait: null,
    heroClass: "",
    status: "alive"
  });

  return {
    player,
    setPlayer,
  };
};
