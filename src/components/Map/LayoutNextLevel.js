import { useUISounds } from "../../helpers/hooks/useUISounds";
import { useAnnouncer } from "../../helpers/hooks/useAnnouncer";
import Announcer from "../MiscComponents/Announcer";
import dungeonIcon from "../../assets/dungeon.svg";

const LayoutNextLevel = ({
  inCemetery,
  setInCemetery,
  cemeteryAmount,
  inMausoleum,
  setInMausoleum,
  mausoleumAmount,
  inDarkPassage,
  setInDarkPassage,
  dPassageAmount,
  inLostGallery,
  setInLostGallery,
  lostGalleryAmount,
  setInHeartPrison,
  inHithair,
  setInHithair,
  setHeaderName,
}) => {
  const { playHover } = useUISounds();

  const { showAnnouncer, hideAnnouncer } = useAnnouncer();

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
      showAnnouncer();
    }
  };

  const loadDarkPassage = () => {
    if (mausoleumAmount == 0) {
      setInDarkPassage((current) => !current);
      setInMausoleum((current) => !current);
      setHeaderName("Dark Passage");
    } else {
      showAnnouncer();
    }
  };

  const loadLostGallery = () => {
    if (dPassageAmount == 0) {
      setInLostGallery((current) => !current);
      setInDarkPassage((current) => !current);
      setHeaderName("LOST GALLERY");
    } else {
      showAnnouncer();
    }
  };

  const loadHeartPrison = () => {
    if (lostGalleryAmount == 0) {
      setInHeartPrison((current) => !current);
      setInLostGallery((current) => !current);
      setHeaderName("HEART'S PRISON");
    } else {
      showAnnouncer();
    }
  };

  const loadHithair = () => {
    setInHithair((current) => !current);
    setInCemetery(false);
    setInMausoleum(false);
    setInDarkPassage(false);
    setInLostGallery(false);
    setHeaderName("City of Hithair");
  };

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

export default LayoutNextLevel;
