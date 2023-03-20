import { create } from 'zustand';
import {
  cemeteryData,
  darkPassageData,
  lostGalleryData,
  mausoleumData,
} from '../data/general';
import { Unit } from '../types';

type possibleLevelsToUpdateStatus =
  | 'isInHithair'
  | 'isInCemetery'
  | 'isInMausoleum'
  | 'isInDarkPassage'
  | 'isInLostGallery'
  | 'isInHeartPrison';

type possibleLevelsForEnemies =
  | 'cemeteryEnemies'
  | 'mausoleumEnemies'
  | 'dPassageEnemies'
  | 'lostGalleryEnemies';

interface State {
  levelName: string;
  isInHithair: boolean;
  isInCemetery: boolean;
  isInMausoleum: boolean;
  isInDarkPassage: boolean;
  isInLostGallery: boolean;
  isInHeartPrison: boolean;
  cemeteryEnemies: Array<Unit>;
  mausoleumEnemies: Array<Unit>;
  dPassageEnemies: Array<Unit>;
  lostGalleryEnemies: Array<Unit>;
  levelsCompletion: {
    cemetery: number;
    mausoleum: number;
    darkPassage: number;
    lostGallery: number;
  };
  cannibalDied: boolean;
}

interface Actions {
  updateLevelName: (level: string) => void;
  updateLevelStatus: (level: possibleLevelsToUpdateStatus) => void;
  updateLevelEnemies: (
    enemyLevel: possibleLevelsForEnemies,
    id: number
  ) => Promise<Array<Unit>>;
  returnToHithair: () => void;
  updateLevelsCompletion: (level: string) => void;
  updateCannibalDied: () => void;
}

const useLevelsStore = create<State & Actions>((set, get) => ({
  levelName: 'City of Hithair',
  isInHithair: true,
  isInCemetery: false,
  isInMausoleum: false,
  isInDarkPassage: false,
  isInLostGallery: false,
  isInHeartPrison: false,
  cemeteryEnemies: cemeteryData,
  mausoleumEnemies: mausoleumData,
  dPassageEnemies: darkPassageData,
  lostGalleryEnemies: lostGalleryData,
  levelsCompletion: {
    cemetery: 0,
    mausoleum: 0,
    darkPassage: 0,
    lostGallery: 0,
  },
  cannibalDied: false,
  updateLevelName: (level: string) => set(() => ({ levelName: level })),
  updateLevelStatus: (level: possibleLevelsToUpdateStatus) => {
    set((state) => ({
      [level]: !state[level],
    }));
  },
  updateLevelEnemies: (enemyLevel: possibleLevelsForEnemies, id: number) =>
    new Promise<Array<Unit>>((resolve) => {
      const updateEnemies = get()[enemyLevel].filter(
        (enemies) => enemies.id != id
      );
      set({ [enemyLevel]: updateEnemies });
      resolve(updateEnemies);
    }),
  returnToHithair: () =>
    set((state) => ({
      isInHithair: true,
      isInCemetery: false,
      isInMausoleum: false,
      isInDarkPassage: false,
      isInLostGallery: false,
      isInHeartPrison: false,
    })),
  updateLevelsCompletion: (level: string) => {
    const getLevels = get().levelsCompletion;
    let key: string = '';

    switch (level) {
      case 'cemetery':
        key = 'cemetery';
      case 'mausoleum':
        key = 'mausoleum';
      case 'dark passage':
        key = 'dark passage';
      case 'lost gallery':
        key = 'lost gallery';
    }

    const updateLevel = { ...getLevels, [key]: 1 };
    set(() => ({ levelsCompletion: updateLevel }));
  },
  updateCannibalDied: () => {
    set(() => ({ cannibalDied: true }));
  },
}));

export default useLevelsStore;
