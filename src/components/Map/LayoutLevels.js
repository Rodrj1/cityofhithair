import { useState } from "react";
import SublayoutLevels from "./SublayoutLevels";
import SublayoutNextLevel from "./SublayoutNextLevel";
import {
  cemeteryData,
  mausoleumData,
  darkPassageData,
  lostGalleryData,
} from "../../data/dataEnemies";

const LayoutLevels = ({
  inHithair,
  setInHithair,
  fight,
  setFight,
  setEnemy,
  setInventory,
  setGold,
  setNoteName,
  setNoteText,
  setInNote,
  setHeaderName,
}) => {

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
  return (
    <>
      {!inHithair && !fight ? (
        <div className="map-levels">
          <SublayoutLevels
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
            mausoleumEnemies={mausoleumEnemies}
            dPassageEnemies={dPassageEnemies}
            lostGalleryEnemies={lostGalleryEnemies}
            setCemeteryEnemies={setCemeteryEnemies}
            setMausoleumEnemies={setMausoleumEnemies}
            setDPassageEnemies={setDPassageEnemies}
            setLostGalleryEnemies={setLostGalleryEnemies}
            setCemeteryAmount={setCemeteryAmount}
            setMausoleumAmount={setMausoleumAmount}
            setDPassageAmount={setDPassageAmount}
            setLostGalleryAmount={setLostGalleryAmount}
            levelState={levelState}
            setLevelState={setLevelState}
          />
        </div>
      ) : null}

      {/* Next-Level Box */}

      {!fight ? (
        <SublayoutNextLevel
          inCemetery={inCemetery}
          inMausoleum={inMausoleum}
          inDarkPassage={inDarkPassage}
          inLostGallery={inLostGallery}
          inHeartPrison={inHeartPrison}
          inHithair={inHithair}
          setInCemetery={setInCemetery}
          setInMausoleum={setInMausoleum}
          setInDarkPassage={setInDarkPassage}
          setInLostGallery={setInLostGallery}
          setInHeartPrison={setInHeartPrison}
          setInHithair={setInHithair}
          setHeaderName={setHeaderName}
          cemeteryAmount={cemeteryAmount}
          mausoleumAmount={mausoleumAmount}
          dPassageAmount={dPassageAmount}
          lostGalleryAmount={lostGalleryAmount}
        />
      ) : null}
    </>
  );
};

export default LayoutLevels;
