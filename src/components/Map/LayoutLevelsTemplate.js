import AnnouncerLoot from "../MiscComponents/AnnouncerLoot";
import DialogNicolai from "../MiscComponents/DialogNicolai";

const LayoutLevelsTemplate = ({
  hideLoot,
  loot,
  setHideLoot,
  inCemetery,
  inMausoleum,
  inDarkPassage,
  inLostGallery,
  inHeartPrison,
  getCemeteryEnemies,
  getMausoleumEnemies,
  getDarkPassageEnemies,
  getLostGalleryEnemies,
}) => {
  return (
    <>
      <AnnouncerLoot
        hideLoot={hideLoot}
        setHideLoot={setHideLoot}
        text="Looking the place you find:"
        loot={loot}
      />

      {/* Cemetery */}

      {inCemetery ? (
        <div className="cemetery">
          <div className="units-flex">{getCemeteryEnemies}</div>
        </div>
      ) : null}

      {/* Mausoleum */}

      {inMausoleum ? (
        <div className="mausoleum">
          <div className="units-flex">{getMausoleumEnemies}</div>
        </div>
      ) : null}

      {/* Dark Passage */}

      {inDarkPassage ? (
        <div className="dark-passage">
          <div className="units-flex">{getDarkPassageEnemies}</div>
        </div>
      ) : null}

      {/* Lost Gallery */}

      {inLostGallery ? (
        <div className="lost-gallery">
          <div className="units-flex">{getLostGalleryEnemies}</div>
        </div>
      ) : null}

      {/* Heart Prison */}

      {inHeartPrison ? (
        <div className="heart-prison">{<DialogNicolai />}</div>
      ) : null}
    </>
  );
};

export default LayoutLevelsTemplate;
