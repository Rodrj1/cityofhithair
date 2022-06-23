import { useUISounds } from "../../helpers/hooks/useUISounds";
import { useAnnouncer } from "../../helpers/hooks/useAnnouncer";
import SublayoutNextLevelTemplate from "./SublayoutNextLevelTemplate";

const SublayoutNextLevel = ({
  inCemetery,
  inMausoleum,
  inDarkPassage,
  inLostGallery,
  inHithair,
  setInCemetery,
  setInMausoleum,
  setInDarkPassage,
  setInLostGallery,
  setInHeartPrison,
  setInHithair,
  setHeaderName,
  cemeteryAmount,
  mausoleumAmount,
  dPassageAmount,
  lostGalleryAmount,
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
    <SublayoutNextLevelTemplate
      loadCemetery={loadCemetery}
      loadMausoleum={loadMausoleum}
      loadDarkPassage={loadDarkPassage}
      loadLostGallery={loadLostGallery}
      loadHeartPrison={loadHeartPrison}
      loadHithair={loadHithair}
      inHithair={inHithair}
      inCemetery={inCemetery}
      inMausoleum={inMausoleum}
      inDarkPassage={inDarkPassage}
      inLostGallery={inLostGallery}
      playHover={playHover}
      hideAnnouncer={hideAnnouncer}
    />
  );
};

export default SublayoutNextLevel;
