import { useEffect, useState } from 'react';
import { PlayerUI } from '../PlayerUI';
import { City } from './City';
import { Levels } from './Levels';
import { GameOver } from '../GameOver';
import { Presentation } from '../Presentation';
import { NextLevel } from './NextLevel';
import { Board } from '../Board';
import { MusicPlayer } from '../MusicPlayer';
import { useLevelsStore, useBattleStore, usePlayerStore } from '../../stores';
import styles from '../../styles/Map.module.scss';

const MapMain = () => {
  const [presentation, setPresentation] = useState(true);
  const [track, setTrack] = useState('');

  const isInFight = useBattleStore((state) => state.isInFight);
  const getPlayerHero = usePlayerStore((state) => state.player);
  const isInHithair = useLevelsStore((state) => state.isInHithair);
  const levelName = useLevelsStore((state) => state.levelName);

  useEffect(() => {
    setTrack('hithair');
    if (isInHithair) {
      setTrack('hithair');
    } else {
      setTrack('dungeons');
    }
  }, [isInHithair]);

  return (
    <>
      <MusicPlayer track={track} />
      {presentation && <Presentation setPresentation={setPresentation} />}

      {getPlayerHero.health <= 0 && <GameOver />}

      <div className={styles.mainMap}>
        {!isInFight && (
          <div className={styles.header}>
            <h1>{levelName}</h1>
          </div>
        )}

        {isInHithair && (
          <div className={styles.city}>
            <City />
          </div>
        )}

        {!isInFight && !isInHithair && (
          <div className={styles.levels}>
            <Levels />
          </div>
        )}

        {!isInFight && (
          <div className={styles.player}>
            <PlayerUI />
          </div>
        )}

        {!isInFight && (
          <div className={styles.nextLevel}>
            <NextLevel />
          </div>
        )}

        {isInFight && (
          <div className={styles.board}>
            <Board />
          </div>
        )}
      </div>
    </>
  );
};

export default MapMain;
