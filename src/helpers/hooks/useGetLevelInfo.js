import { useState } from "react";
import {
  cemeteryData,
  mausoleumData,
  darkPassageData,
} from "../data/enemiesData";

export const useLevelInfo = () => {
  const [fight, setFight] = useState(false);
  const [enemy, setEnemy] = useState({
    name: "",
    health: 0,
    maxHealth: 0,
    attack: 0,
    defense: 0,
  });

  const [cemeteryEnemies, setCemeteryEnemies] = useState(cemeteryData);
  const [cemeteryAmount, setCemeteryAmount] = useState(cemeteryData.length);
  const [mausoleumEnemies, setMausoleumEnemies] = useState(mausoleumData);
  const [mausoleumAmount, setMausoleumAmount] = useState(mausoleumData.length);
  const [dPassageEnemies, setDPassageEnemies] = useState(darkPassageData);
  const [dPassageAmount, setDPassageAmount] = useState(darkPassageData.length);

  const [headerName, setHeaderName] = useState("City of Hithair");
  const [inHithair, setInHithair] = useState(true);
  const [inCemetery, setInCemetery] = useState(false);
  const [inMausoleum, setInMausoleum] = useState(false);
  const [inDarkPassage, setInDarkPassage] = useState(false);
  const [inLostCatacomb, setInLostCatacomb] = useState(false);

  const loadCemetery = () => {
    setInCemetery((current) => !current);
    setInHithair((current) => !current);
    setHeaderName("Cemetery");
  };
  const loadMausoleum = () => {
    if (cemeteryAmount == 0) {
      setInMausoleum((current) => !current);
      setInCemetery((current) => !current);
      setHeaderName("Mausoleum");
    } else {
      alert("enemies left");
    }
  };

  const loadDarkPassage = () => {
    if (mausoleumAmount == 0) {
      setInDarkPassage((current) => !current);
      setInMausoleum((current) => !current);
      setHeaderName("Dark Passage");
    } else {
      alert("enemies left");
    }
  };

  const loadHithair = () => {
    setInHithair((current) => !current);
    setInCemetery(false);
    setInMausoleum(false);
    setInDarkPassage(false);
    setHeaderName("City of Hithair");
  };

  return {
    fight,
    setFight,
    enemy,
    setEnemy,
    cemeteryEnemies,
    setCemeteryEnemies,
    cemeteryAmount,
    setCemeteryAmount,
    mausoleumEnemies,
    setMausoleumEnemies,
    mausoleumAmount,
    setMausoleumAmount,
    dPassageEnemies,
    setDPassageEnemies,
    dPassageAmount,
    setDPassageAmount,
    inHithair,
    inCemetery,
    inMausoleum,
    inDarkPassage,
    inLostCatacomb,
    loadCemetery,
    loadMausoleum,
    loadDarkPassage,
    loadHithair,
  };
};
