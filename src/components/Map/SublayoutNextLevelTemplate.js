import Announcer from "../MiscComponents/Announcer";
import dungeonIcon from "../../assets/dungeon.svg";

const SublayoutNextLevelTemplate = ({
  loadCemetery,
  loadMausoleum,
  loadDarkPassage,
  loadLostGallery,
  loadHeartPrison,
  loadHithair,
  inHithair,
  inCemetery,
  inMausoleum,
  inDarkPassage,
  inLostGallery,
  playHover,
  hideAnnouncer,
}) => {
  return (
    <>
      {!hideAnnouncer ? <Announcer text="THERE ARE ENEMIES LEFT." /> : null}
      {inHithair ? (
        <div className="map-next-level nl-cemetery">
          <h4>ENTER CEMETERY</h4>
          <img
            src={dungeonIcon}
            className="dungeon-icon"
            onClick={loadCemetery}
            onMouseOver={playHover}
            alt={"Enter Cemetery"}
          />
        </div>
      ) : null}

      {inCemetery ? (
        <div className="map-next-level nl-mausoleum">
          <h4>ENTER MAUSOLEUM</h4>
          <img
            src={dungeonIcon}
            className="dungeon-icon"
            onClick={loadMausoleum}
            onMouseOver={playHover}
            alt={"Enter Mausoleum"}
          />
          <h4>RETURN TO HITHAIR</h4>
          <img
            src={dungeonIcon}
            className="dungeon-icon"
            onClick={loadHithair}
            onMouseOver={playHover}
            alt={"Return to Hithair"}
          />
        </div>
      ) : null}

      {inMausoleum ? (
        <div className="map-next-level nl-dark-passage">
          <h4>ENTER DARK PASSAGE</h4>
          <img
            src={dungeonIcon}
            className="dungeon-icon"
            onClick={loadDarkPassage}
            onMouseOver={playHover}
            alt={"Enter Dark Passage"}
          />
          <h4>RETURN TO HITHAIR</h4>
          <img
            src={dungeonIcon}
            className="dungeon-icon"
            onClick={loadHithair}
            onMouseOver={playHover}
            alt={"Return to Hithair"}
          />
        </div>
      ) : null}
      {inDarkPassage ? (
        <div className="map-next-level nl-lost-gallery">
          <h4>ENTER LOST GALLERY</h4>
          <img
            src={dungeonIcon}
            className="dungeon-icon"
            onClick={loadLostGallery}
            onMouseOver={playHover}
            alt={"Enter Lost Gallery"}
          />
          <h4>RETURN TO HITHAIR</h4>
          <img
            src={dungeonIcon}
            className="dungeon-icon"
            onClick={loadHithair}
            onMouseOver={playHover}
            alt={"Return to Hithair"}
          />
        </div>
      ) : null}

      {inLostGallery ? (
        <div className="map-next-level nl-heart-prison">
          <h4>ENTER HEART'S PRISON</h4>
          <img
            src={dungeonIcon}
            className="dungeon-icon"
            onClick={loadHeartPrison}
            onMouseOver={playHover}
            alt={"Enter Heart's Prison"}
          />
          <h4>RETURN TO HITHAIR</h4>
          <img
            src={dungeonIcon}
            className="dungeon-icon"
            onClick={loadHithair}
            onMouseOver={playHover}
            alt={"Return to Hithair"}
          />
        </div>
      ) : null}
    </>
  );
};

export default SublayoutNextLevelTemplate;
