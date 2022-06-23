import { useState } from "react";
import LayoutPlayer from "./LayoutPlayer";
import LayoutMapCity from "./LayoutMapCity";
import LayoutLevels from "./LayoutLevels";
import AnnouncerItems from "../MiscComponents/AnnouncerItems";
import Board from "../Board/Board";

const MapLayout = ({
  fight,
  setFight,
  player,
  setPlayer,
  setIsPlayerAlive,
}) => {
  const [enemy, setEnemy] = useState({});

  // * Player inventory

  const [gold, setGold] = useState(100);
  const [inventory, setInventory] = useState([]);
  const [buyBlindness, setBuyBlindness] = useState(false);

  // * UI

  const headerStyle = { fontSize: "30px", margin: "auto" };
  const [headerName, setHeaderName] = useState("City of Hithair");
  const [inHithair, setInHithair] = useState(true);

  // * Notes/Texts/Descriptions

  const [inNote, setInNote] = useState(false);
  const [noteName, setNoteName] = useState("");
  const [noteText, setNoteText] = useState("");

  // * Item Announcer
  const [hideAnnouncer, setHideAnnouncer] = useState(false);
  const [textAnnouncer, setTextAnnouncer] = useState("");

  return (
    <>
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
          <LayoutMapCity
            gold={gold}
            setGold={setGold}
            player={player}
            setPlayer={setPlayer}
            setHideAnnouncer={setHideAnnouncer}
            setTextAnnouncer={setTextAnnouncer}
            setBuyBlindness={setBuyBlindness}
          />
        ) : null}

        {/* Levels */}

        <LayoutLevels
          inHithair={inHithair}
          setInHithair={setInHithair}
          fight={fight}
          setFight={setFight}
          setEnemy={setEnemy}
          setInventory={setInventory}
          setGold={setGold}
          setNoteName={setNoteName}
          setNoteText={setNoteText}
          setInNote={setInNote}
          setHeaderName={setHeaderName}
        />

        {/* Player */}

        {!fight ? (
          <div className="map-player">
            <LayoutPlayer
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
      </div>
    </>
  );
};
export default MapLayout;
