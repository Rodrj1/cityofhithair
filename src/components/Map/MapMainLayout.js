import { useState } from "react";
// * Custom Hooks
import { useGetDialogOptions } from "../../helpers/hooks/useGetDialogOptions";
// * Components
import MapPresentation from "./MapPresentation";
import LayoutNextLevel from "./LayoutNextLevel";
import LayoutPlayer from "./LayoutPlayer";
import LayoutLevels from "./LayoutLevels";
import Board from "../Board/Board";
import Npc from "../MiscComponents/NPC";
import Dialog from "../MiscComponents/Dialog";
import AnnouncerItems from "../MiscComponents/AnnouncerItems";
// * Data/UI
import {
  cemeteryData,
  mausoleumData,
  darkPassageData,
  lostGalleryData,
} from "../../data/dataEnemies";
import npcPortraits from "../../data/portraitsNPCs";
import GameOver from "./MapGameOver";

const MainMap = ({ player, setPlayer }) => {
  const [mapPresentation, setMapPresentation] = useState(true);

  // * Preset fight

  const [fight, setFight] = useState(false);
  const [enemy, setEnemy] = useState({
    name: "",
    health: 0,
    maxHealth: 0,
    attack: 0,
    defense: 0,
    magic: 0,
  });
  const [isPlayerAlive, setIsPlayerAlive] = useState(true);

  // * Player's resources

  const [gold, setGold] = useState(100);
  const [inventory, setInventory] = useState([]);
  const [buyBlindness, setBuyBlindness] = useState(false);

  // * UI

  const headerStyle = { fontSize: "30px", margin: "auto" };
  const [headerName, setHeaderName] = useState("City of Hithair");
  const [inHithair, setInHithair] = useState(true);
  const [inCemetery, setInCemetery] = useState(false);
  const [inMausoleum, setInMausoleum] = useState(false);
  const [inDarkPassage, setInDarkPassage] = useState(false);
  const [inLostGallery, setInLostGallery] = useState(false);
  const [inHeartPrison, setInHeartPrison] = useState(false);

  // * Levels' Data

  const [cemeteryEnemies, setCemeteryEnemies] = useState(cemeteryData);
  const [cemeteryAmount, setCemeteryAmount] = useState(cemeteryData.length);
  const [mausoleumEnemies, setMausoleumEnemies] = useState(mausoleumData);
  const [mausoleumAmount, setMausoleumAmount] = useState(mausoleumData.length);
  const [dPassageEnemies, setDPassageEnemies] = useState(darkPassageData);
  const [dPassageAmount, setDPassageAmount] = useState(darkPassageData.length);
  const [lostGalleryEnemies, setLostGalleryEnemies] = useState(lostGalleryData);
  const [lostGalleryAmount, setLostGalleryAmount] = useState(
    lostGalleryData.length
  );
  const [levelState, setLevelState] = useState({
    cemetery: true,
    mausoleum: true,
    darkPassage: true,
    lostGallery: true,
  });

  // * Dialog

  const [inDialog, setInDialog] = useState(false);
  const [dialogName, setDialogName] = useState("");
  const [dialogPortrait, setDialogPortrait] = useState(null);
  const [dialogOptions, setDialogOptions] = useState([]);
  const { marion, merchant, knight, dialogText, setDialogText } =
    useGetDialogOptions();

  // * Notes/Texts/Descriptions

  const [inNote, setInNote] = useState(false);
  const [noteName, setNoteName] = useState("");
  const [noteText, setNoteText] = useState("");

  // * Item Announcer
  const [hideAnnouncer, setHideAnnouncer] = useState(false);
  const [textAnnouncer, setTextAnnouncer] = useState("");

  return (
    <>
      {mapPresentation ? (
        <MapPresentation setMapPresentation={setMapPresentation} />
      ) : null}

      {hideAnnouncer ? (
        <AnnouncerItems
          setHideAnnouncer={setHideAnnouncer}
          text={textAnnouncer}
        />
      ) : null}

      <div className="main-map">
        {/* Header */}

        {!fight ? (
          <div className="map-header">
            <h4 style={headerStyle}>{headerName}</h4>
          </div>
        ) : null}

        {/* City: NPC/Dialog */}

        {inHithair ? (
          <div className="map-city">
            <Npc
              setInDialog={setInDialog}
              setDialogName={setDialogName}
              setDialogPortrait={setDialogPortrait}
              setDialogText={setDialogText}
              setDialogOptions={setDialogOptions}
              dialogOptions={marion}
              name={"Marion"}
              portrait={npcPortraits.marion}
              face={npcPortraits.marionface}
            />
            <Npc
              setInDialog={setInDialog}
              setDialogName={setDialogName}
              setDialogPortrait={setDialogPortrait}
              setDialogText={setDialogText}
              setDialogOptions={setDialogOptions}
              dialogOptions={merchant}
              name={"Merchant"}
              portrait={npcPortraits.merchant}
              face={npcPortraits.merchantface}
            />
            <Npc
              setInDialog={setInDialog}
              setDialogName={setDialogName}
              setDialogPortrait={setDialogPortrait}
              setDialogText={setDialogText}
              setDialogOptions={setDialogOptions}
              dialogOptions={knight}
              name={"Knight"}
              portrait={npcPortraits.knight}
              face={npcPortraits.knightface}
            />
            <div className="city-dialog">
              {inDialog ? (
                <Dialog
                  dialogName={dialogName}
                  dialogPortrait={dialogPortrait}
                  dialogOptions={dialogOptions}
                  dialogText={dialogText}
                  setDialogText={setDialogText}
                  setInDialog={setInDialog}
                  gold={gold}
                  setGold={setGold}
                  player={player}
                  setPlayer={setPlayer}
                  setHideAnnouncer={setHideAnnouncer}
                  setTextAnnouncer={setTextAnnouncer}
                  setBuyBlindness={setBuyBlindness}
                />
              ) : null}
            </div>
          </div>
        ) : null}

        {/* Levels */}

        {!inHithair && !fight ? (
          <div className="map-levels">
            <LayoutLevels
              fight={fight}
              setFight={setFight}
              setEnemy={setEnemy}
              setInventory={setInventory}
              setGold={setGold}
              setNoteName={setNoteName}
              setNoteText={setNoteText}
              setInNote={setInNote}
              inCemetery={inCemetery}
              inMausoleum={inMausoleum}
              inDarkPassage={inDarkPassage}
              inLostGallery={inLostGallery}
              inHeartPrison={inHeartPrison}
              cemeteryEnemies={cemeteryEnemies}
              setCemeteryEnemies={setCemeteryEnemies}
              setCemeteryAmount={setCemeteryAmount}
              mausoleumEnemies={mausoleumEnemies}
              setMausoleumEnemies={setMausoleumEnemies}
              setMausoleumAmount={setMausoleumAmount}
              dPassageEnemies={dPassageEnemies}
              setDPassageEnemies={setDPassageEnemies}
              setDPassageAmount={setDPassageAmount}
              lostGalleryEnemies={lostGalleryEnemies}
              setLostGalleryEnemies={setLostGalleryEnemies}
              setLostGalleryAmount={setLostGalleryAmount}
              levelState={levelState}
              setLevelState={setLevelState}
            />
          </div>
        ) : null}

        {/* Player */}

        {!fight ? (
          <div className="map-player">
            <LayoutPlayer
              inDialog={inDialog}
              heroName={player.name}
              heroPortrait={player.portrait}
              player={player}
              gold={gold}
              inventory={inventory}
              inNote={inNote}
              setInNote={setInNote}
              noteName={noteName}
              noteText={noteText}
            />
          </div>
        ) : null}

        {/* Next-Level Box */}

        {!fight ? (
          <LayoutNextLevel
            inCemetery={inCemetery}
            setInCemetery={setInCemetery}
            cemeteryAmount={cemeteryAmount}
            inMausoleum={inMausoleum}
            setInMausoleum={setInMausoleum}
            mausoleumAmount={mausoleumAmount}
            inDarkPassage={inDarkPassage}
            setInDarkPassage={setInDarkPassage}
            dPassageAmount={dPassageAmount}
            inLostGallery={inLostGallery}
            setInLostGallery={setInLostGallery}
            lostGalleryAmount={lostGalleryAmount}
            inHeartPrison={inHeartPrison}
            setInHeartPrison={setInHeartPrison}
            inHithair={inHithair}
            setInHithair={setInHithair}
            setHeaderName={setHeaderName}
          />
        ) : null}

        {/* Board */}

        {fight ? (
          <div className="map-board">
            <Board
              enemyBoard={enemy}
              playerBoard={player}
              setFight={setFight}
              buyBlindness={buyBlindness}
              setIsPlayerAlive={setIsPlayerAlive}
            />
          </div>
        ) : null}

        {!isPlayerAlive ? <GameOver /> : null}
      </div>
    </>
  );
};

export default MainMap;
