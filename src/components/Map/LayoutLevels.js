import { useEffect, useState } from "react";
// * Custom Hooks
import { useAnnouncerLoot } from "../../helpers/hooks/useAnnouncerLoot";
// * Components
import LevelsEnemyTemplate from "../MiscComponents/LevelsEnemyTemplate";
import LayoutLevelsTemplate from "./LayoutLevelsTemplate";
// * Data/UI
import { notesInfo } from "../../data/dataTexts";
import { itemText } from "../../data/dataTooltips";
import itemsIcons from "../../data/iconItems";

const LayoutLevels = ({
  fight,
  setFight,
  setEnemy,
  setInventory,
  setGold,
  setNoteName,
  setNoteText,
  setInNote,
  inCemetery,
  inMausoleum,
  inDarkPassage,
  inLostGallery,
  inHeartPrison,
  cemeteryEnemies,
  mausoleumEnemies,
  dPassageEnemies,
  lostGalleryEnemies,
  setCemeteryEnemies,
  setMausoleumEnemies,
  setDPassageEnemies,
  setLostGalleryEnemies,
  setCemeteryAmount,
  setMausoleumAmount,
  setDPassageAmount,
  setLostGalleryAmount,
  levelState,
  setLevelState,
}) => {
  const { hideLoot, setHideLoot } = useAnnouncerLoot();
  const [loot, setLoot] = useState([]);

  // * Set Enemies

  const getCemeteryEnemies = cemeteryEnemies.map((enemy) => (
    <LevelsEnemyTemplate
      key={enemy.id}
      id={enemy.id}
      enemy={enemy}
      setFight={setFight}
      setEnemy={setEnemy}
      enemies={cemeteryEnemies}
      setEnemies={setCemeteryEnemies}
      setEnemiesAmount={setCemeteryAmount}
    />
  ));

  const getMausoleumEnemies = mausoleumEnemies.map((enemy) => (
    <LevelsEnemyTemplate
      key={enemy.id}
      id={enemy.id}
      enemy={enemy}
      setFight={setFight}
      setEnemy={setEnemy}
      enemies={mausoleumEnemies}
      setEnemies={setMausoleumEnemies}
      setEnemiesAmount={setMausoleumAmount}
    />
  ));

  const getDarkPassageEnemies = dPassageEnemies.map((enemy) => (
    <LevelsEnemyTemplate
      key={enemy.id}
      id={enemy.id}
      enemy={enemy}
      setFight={setFight}
      setEnemy={setEnemy}
      enemies={dPassageEnemies}
      setEnemies={setDPassageEnemies}
      setEnemiesAmount={setDPassageAmount}
    />
  ));

  const getLostGalleryEnemies = lostGalleryEnemies.map((enemy) => (
    <LevelsEnemyTemplate
      key={enemy.id}
      id={enemy.id}
      enemy={enemy}
      setFight={setFight}
      setEnemy={setEnemy}
      enemies={lostGalleryEnemies}
      setEnemies={setLostGalleryEnemies}
      setEnemiesAmount={setLostGalleryAmount}
    />
  ));

  // * Set items

  const cemeteryLoot = [
    {
      name: "+100 gold.",
      img: itemsIcons.playergold,
      iconClass: "icon-item-img",
      buttonClass: "button-item",
    },
    {
      name: "Tome: Of Koetria.",
      img: itemsIcons.note,
      iconClass: "icon-item-img",
      buttonClass: "button-item",
    },
    {
      name: "Journal - Part I.",
      img: itemsIcons.note,
      iconClass: "icon-item-img",
      buttonClass: "button-item",
    },
  ];

  const mausoleumLoot = [
    {
      name: "+100 gold.",
      img: itemsIcons.playergold,
      iconClass: "icon-item-img",
      buttonClass: "button-item",
    },
    {
      name: "Journal - Part II.",
      img: itemsIcons.note,
      iconClass: "icon-item-img",
      buttonClass: "button-item",
    },
  ];

  const darkPassageLoot = [
    {
      name: "+100 gold.",
      img: itemsIcons.playergold,
      iconClass: "icon-item-img",
      buttonClass: "button-item",
    },
    {
      name: "Journal - Part III.",
      img: itemsIcons.note,
      iconClass: "icon-item-img",
      buttonClass: "button-item",
    },
  ];

  const lostGalleryLoot = [
    {
      name: "+100 gold.",
      img: itemsIcons.playergold,
      iconClass: "icon-item-img",
      buttonClass: "button-item",
    },
    {
      name: "Hawnyr's Journal.",
      img: itemsIcons.note,
      iconClass: "icon-item-img",
      buttonClass: "button-item",
    },
  ];

  // * Set items functions

  const showKoetriaNote = () => {
    setInNote((current) => !current);
    setNoteName("Tome: Of Koetria");
    setNoteText(notesInfo.ofKoetria);
  };

  const showJournalPI = () => {
    setInNote((current) => !current);
    setNoteName("Journal - Part I");
    setNoteText(notesInfo.journalPartI);
  };

  const showJournalPII = () => {
    setInNote((current) => !current);
    setNoteName("Journal - Part II");
    setNoteText(notesInfo.journalPartII);
  };

  const showJournalPIII = () => {
    setInNote((current) => !current);
    setNoteName("Journal - Part III");
    setNoteText(notesInfo.journalPartIII);
  };

  const showJournalHawnyr = () => {
    setInNote((current) => !current);
    setNoteName("Journal - Hawnyr");
    setNoteText(notesInfo.journalHawnyr);
  };

  // * Set items to inventory

  useEffect(() => {
    if (cemeteryEnemies == 0 && levelState.cemetery) {
      setLoot(cemeteryLoot);
      setHideLoot((current) => !current);
      setLevelState({ ...levelState, cemetery: false });
      setGold((gold) => gold + 100);
      setInventory((prevState) => [
        ...prevState,
        {
          fn: showJournalPI,
          img: itemsIcons.note,
          id: "journal-I",
          tooltipText: itemText.journalI,
          iconClass: "icon-item-img",
          buttonClass: "button-item",
        },
        {
          fn: showKoetriaNote,
          img: itemsIcons.note,
          id: "ofKoetria",
          tooltipText: itemText.ofkoetria,
          iconClass: "icon-item-img",
          buttonClass: "button-item",
        },
      ]);
    }
    if (mausoleumEnemies == 0 && levelState.mausoleum) {
      setLoot(mausoleumLoot);
      setHideLoot((current) => !current);
      setLevelState({ ...levelState, mausoleum: false });
      setGold((gold) => gold + 100);
      setInventory((prevState) => [
        ...prevState,
        {
          fn: showJournalPII,
          img: itemsIcons.note,
          id: "journal-II",
          tooltipText: itemText.journalII,
          iconClass: "icon-item-img",
          buttonClass: "button-item",
        },
      ]);
    }
    if (dPassageEnemies == 0 && levelState.darkPassage) {
      setLoot(darkPassageLoot);
      setHideLoot((current) => !current);
      setLevelState({ ...levelState, darkPassage: false });
      setGold((gold) => gold + 100);
      setInventory((prevState) => [
        ...prevState,
        {
          fn: showJournalPIII,
          img: itemsIcons.note,
          id: "journal-III",
          tooltipText: itemText.journalIII,
          iconClass: "icon-item-img",
          buttonClass: "button-item",
        },
      ]);
    }
    if (lostGalleryEnemies == 0 && levelState.lostGallery) {
      setLoot(lostGalleryLoot);
      setHideLoot((current) => !current);
      setLevelState({ ...levelState, lostGallery: false });
      setGold((gold) => gold + 100);
      setInventory((prevState) => [
        ...prevState,
        {
          fn: showJournalHawnyr,
          img: itemsIcons.note,
          id: "journal-Hawnyr",
          tooltipText: itemText.journalHawnyr,
          iconClass: "icon-item-img",
          buttonClass: "button-item",
        },
      ]);
    }
  }, []);

  return (
    <>
      {!fight ? (
        <LayoutLevelsTemplate
          loot={loot}
          hideLoot={hideLoot}
          setHideLoot={setHideLoot}
          inCemetery={inCemetery}
          inMausoleum={inMausoleum}
          inDarkPassage={inDarkPassage}
          inLostGallery={inLostGallery}
          inHeartPrison={inHeartPrison}
          getCemeteryEnemies={getCemeteryEnemies}
          getMausoleumEnemies={getMausoleumEnemies}
          getDarkPassageEnemies={getDarkPassageEnemies}
          getLostGalleryEnemies={getLostGalleryEnemies}
        />
      ) : null}
    </>
  );
};

export default LayoutLevels;