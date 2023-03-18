import { create } from 'zustand';
import {
  cemeteryData,
  darkPassageData,
  lostGalleryData,
  mausoleumData,
} from '../data/general';
import { Unit } from '../types';

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
  updateLevelStatus: (level: string) => void;
  updateLevelEnemies: (enemyLevel: string, id: number) => Promise<Array<Unit>>;
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
  updateLevelStatus: (level: string) => {
    if (level == 'hithair') {
      set((state) => ({
        isInHithair: !state.isInHithair,
      }));
    }
    if (level == 'cemetery') {
      set((state) => ({
        isInCemetery: !state.isInCemetery,
      }));
    }
    if (level == 'mausoleum') {
      set((state) => ({
        isInMausoleum: !state.isInMausoleum,
      }));
    }
    if (level == 'dark passage') {
      set((state) => ({
        isInDarkPassage: !state.isInDarkPassage,
      }));
    }
    if (level == 'lost gallery') {
      set((state) => ({
        isInLostGallery: !state.isInLostGallery,
      }));
    }
    if (level == 'heart prison') {
      set((state) => ({
        isInHeartPrison: !state.isInHeartPrison,
      }));
    }
  },
  updateLevelEnemies: (enemyLevel: string, id: number) =>
    new Promise<Array<Unit>>((resolve) => {
      if (enemyLevel == 'cemetery') {
        const updateEnemies = get().cemeteryEnemies.filter(
          (enemies) => enemies.id != id
        );
        set({ cemeteryEnemies: updateEnemies });
        resolve(updateEnemies);
      }
      if (enemyLevel == 'mausoleum') {
        const updateEnemies = get().mausoleumEnemies.filter(
          (enemies) => enemies.id != id
        );
        set({ mausoleumEnemies: updateEnemies });
        resolve(updateEnemies);
      }
      if (enemyLevel == 'dark passage') {
        const updateEnemies = get().dPassageEnemies.filter(
          (enemies) => enemies.id != id
        );
        set({ dPassageEnemies: updateEnemies });
        resolve(updateEnemies);
      }
      if (enemyLevel == 'lost gallery') {
        const updateEnemies = get().lostGalleryEnemies.filter(
          (enemies) => enemies.id != id
        );
        set({ lostGalleryEnemies: updateEnemies });
        resolve(updateEnemies);
      }
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
