import ShowLoot from '../../Announcers/ShowLoot';
import { useLevelsStore } from '../../../stores';
import { Unit } from '../../../types';
import { Enemy } from '../../Enemy';
import { DialogNicolai } from '../../DialogNicolai';
import { Centerer } from '../../Centerer';
import { useEffect } from 'react';
import werewolfHowl from '../../../assets/sound/werewolfHowl.ogg';
import styles from '../../../styles/Levels.module.scss';

const playHowl = () => {
  new Audio(werewolfHowl).play();
};

const Levels = () => {
  const cemeteryEnemies = useLevelsStore((state) => state.cemeteryEnemies);
  const mausoleumEnemies = useLevelsStore((state) => state.mausoleumEnemies);
  const dPassageEnemies = useLevelsStore((state) => state.dPassageEnemies);
  const lostGalleryEnemies = useLevelsStore(
    (state) => state.lostGalleryEnemies
  );

  const isInCemetery = useLevelsStore((state) => state.isInCemetery);
  const isInMausoleum = useLevelsStore((state) => state.isInMausoleum);
  const isInDarkPassage = useLevelsStore((state) => state.isInDarkPassage);
  const isInLostGallery = useLevelsStore((state) => state.isInLostGallery);
  const isInHeartPrison = useLevelsStore((state) => state.isInHeartPrison);

  const cannibalDied = useLevelsStore((state) => state.cannibalDied);
  const { updateCannibalDied } = useLevelsStore();

  useEffect(() => {
    if (dPassageEnemies.length == 0 && cannibalDied == false) {
      updateCannibalDied();
      playHowl();
    }
  }, [dPassageEnemies]);

  return (
    <>
      <ShowLoot text="Looking the place you find:" />

      {isInCemetery && (
        <div className={styles.cemetery}>
          <div className={styles.enemies}>
            {cemeteryEnemies.map((enemy: Unit) => (
              <div className={styles.enemy} key={enemy.id}>
                <Enemy enemy={enemy} />
              </div>
            ))}
          </div>
        </div>
      )}

      {isInMausoleum && (
        <div className={styles.mausoleum}>
          <div className={styles.enemies}>
            {mausoleumEnemies.map((enemy: Unit) => (
              <div className={styles.enemy} key={enemy.id}>
                <Enemy enemy={enemy} />
              </div>
            ))}
          </div>
        </div>
      )}

      {isInDarkPassage && (
        <div className={styles.darkPassage}>
          <div className={styles.enemies}>
            {dPassageEnemies.map((enemy: Unit) => (
              <div className={styles.enemy} key={enemy.id}>
                <Enemy enemy={enemy} />
              </div>
            ))}
          </div>
        </div>
      )}

      {isInLostGallery && (
        <div className={styles.lostGallery}>
          <div className={styles.enemies}>
            {lostGalleryEnemies.map((enemy: Unit) => (
              <div className={styles.enemy} key={enemy.id}>
                <Enemy enemy={enemy} />{' '}
              </div>
            ))}
          </div>
        </div>
      )}

      {isInHeartPrison && (
        <div className={styles.heartPrison}>
          <Centerer>{<DialogNicolai />}</Centerer>
        </div>
      )}
    </>
  );
};

export default Levels;
