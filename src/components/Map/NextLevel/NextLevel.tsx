import { useLevelsStore } from '../../../stores';
import { shallow } from 'zustand/shallow';
import dungeonIcon from '../../../assets/dungeon.svg';
import style from '../../../styles/NextLevel.module.scss';

const NextLevel = () => {
  const {
    isInHithair,
    isInCemetery,
    isInMausoleum,
    isInDarkPassage,
    isInLostGallery,
  } = useLevelsStore(
    (state) => ({
      isInHithair: state.isInHithair,
      isInCemetery: state.isInCemetery,
      isInMausoleum: state.isInMausoleum,
      isInDarkPassage: state.isInDarkPassage,
      isInLostGallery: state.isInLostGallery,
    }),
    shallow
  );

  const cemeteryAmount = useLevelsStore(
    (state) => state.cemeteryEnemies.length
  );
  const mausoleumAmount = useLevelsStore(
    (state) => state.mausoleumEnemies.length
  );
  const darkPassageAmount = useLevelsStore(
    (state) => state.dPassageEnemies.length
  );
  const lostGalleryAmount = useLevelsStore(
    (state) => state.lostGalleryEnemies.length
  );
  const { updateLevelStatus, updateLevelName, returnToHithair } =
    useLevelsStore();

  const loadCemetery = () => {
    updateLevelStatus('hithair');
    updateLevelStatus('cemetery');
    updateLevelName('Cemetery');
  };
  const loadMausoleum = () => {
    if (cemeteryAmount == 0) {
      updateLevelStatus('cemetery');
      updateLevelStatus('mausoleum');
      updateLevelName('Mausoleum');
    }
  };

  const loadDarkPassage = () => {
    if (mausoleumAmount == 0) {
      updateLevelStatus('mausoleum');
      updateLevelStatus('dark passage');
      updateLevelName('Dark Passage');
    }
  };

  const loadLostGallery = () => {
    if (darkPassageAmount == 0) {
      updateLevelStatus('dark passage');
      updateLevelStatus('lost gallery');
      updateLevelName('Lost Gallery');
    }
  };

  const loadHeartPrison = () => {
    if (lostGalleryAmount == 0) {
      updateLevelStatus('lost gallery');
      updateLevelStatus('heart prison');
      updateLevelName("Heart's Prison");
    }
  };

  const loadHithair = () => {
    returnToHithair();
    updateLevelName('City of Hithair');
  };

  return (
    <>
      {/*!hideAnnouncer ? <Announcer text="THERE ARE ENEMIES LEFT." /> : null*/}
      {isInHithair ? (
        <div className={`${style.nextLevel} ${style.cemetery}`}>
          <h4>ENTER CEMETERY</h4>
          <img
            src={dungeonIcon}
            onClick={loadCemetery}
            alt={'Enter Cemetery'}
          />
        </div>
      ) : null}

      {isInCemetery ? (
        <div className={`${style.nextLevel} ${style.mausoleum}`}>
          <h4>ENTER MAUSOLEUM</h4>
          <img
            src={dungeonIcon}
            onClick={loadMausoleum}
            alt={'Enter Mausoleum'}
          />
          <h4>RETURN TO HITHAIR</h4>
          <img
            src={dungeonIcon}
            onClick={loadHithair}
            alt={'Return to Hithair'}
          />
        </div>
      ) : null}

      {isInMausoleum ? (
        <div className={`${style.nextLevel} ${style.darkPassage}`}>
          <h4>ENTER DARK PASSAGE</h4>
          <img
            src={dungeonIcon}
            onClick={loadDarkPassage}
            alt={'Enter Dark Passage'}
          />
          <h4>RETURN TO HITHAIR</h4>
          <img
            src={dungeonIcon}
            onClick={loadHithair}
            alt={'Return to Hithair'}
          />
        </div>
      ) : null}
      {isInDarkPassage ? (
        <div className={`${style.nextLevel} ${style.lostGallery}`}>
          <h4>ENTER LOST GALLERY</h4>
          <img
            src={dungeonIcon}
            onClick={loadLostGallery}
            alt={'Enter Lost Gallery'}
          />
          <h4>RETURN TO HITHAIR</h4>
          <img
            src={dungeonIcon}
            onClick={loadHithair}
            alt={'Return to Hithair'}
          />
        </div>
      ) : null}

      {isInLostGallery ? (
        <div className={`${style.nextLevel} ${style.heartPrison}`}>
          <h4>ENTER HEART'S PRISON</h4>
          <img
            src={dungeonIcon}
            onClick={loadHeartPrison}
            alt={"Enter Heart's Prison"}
          />
          <h4>RETURN TO HITHAIR</h4>
          <img
            src={dungeonIcon}
            onClick={loadHithair}
            alt={'Return to Hithair'}
          />
        </div>
      ) : null}
    </>
  );
};

export default NextLevel;
