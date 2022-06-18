import { useState } from "react";
import { useActionSounds } from "./useActionSounds";

export const useGetPlayerActions = () => {
  const [playerAction, setPlayerAction] = useState("");
  const [animation, setAnimation] = useState("");
  const [playerActionState, setPlayerActionState] = useState(1);

  const { playAttack, playDefense, playMagic } = useActionSounds();

  const attack = () => {
    if (playerActionState == 1 && animation != "Animation") {
      setPlayerAction("attack");
      playAttack();
    }
  };

  const defend = () => {
    if (playerActionState == 1 && animation != "Animation") {
      setPlayerAction("defend");
      playDefense();
    }
  };

  const castFrenzy = () => {
    if (playerActionState == 1 && animation != "Animation") {
      setPlayerAction("frenzy");
      playMagic();
    }
  };

  const drinkPotion = () => {
    if (playerActionState == 1 && animation != "Animation") {
      setPlayerAction("drinkPotion");
      playMagic();
    }
  };

  const drainAttack = () => {
    if (playerActionState == 1 && animation != "Animation") {
      setPlayerAction("drainAttack");
      playAttack();
    }
  };

  const castWeakness = () => {
    if (playerActionState == 1 && animation != "Animation") {
      setPlayerAction("weakness");
      playMagic();
    }
  };
  const castVulnerability = () => {
    if (playerActionState == 1 && animation != "Animation") {
      setPlayerAction("vulnerability");
      playMagic();
    }
  };

  const castDrainLife = () => {
    if (playerActionState == 1 && animation != "Animation") {
      setPlayerAction("drainLife");
      playMagic();
    }
  };

  const castBlindness = () => {
    if (playerActionState == 1 && animation != "Animation") {
      setPlayerAction("blindness");
      playMagic();
    }
  };

  return {
    playerAction,
    setPlayerAction,
    playerActionState,
    setPlayerActionState,
    animation,
    setAnimation,
    attack,
    drainAttack,
    defend,
    castWeakness,
    castVulnerability,
    castBlindness,
    drinkPotion,
    castDrainLife,
    castFrenzy
  };
};
