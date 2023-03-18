import { create } from 'zustand';
import { Item, Player } from '../types';

interface State {
  player: Player;
  class: string;
  inventory: Array<Item>;
  gold: number;
  healthPotions: number;
  manaPotions: number;
}

interface Actions {
  establishInitialHero: (hero: Player) => void;
  updatePlayerHero: (stat: 'darkMastery' | 'attack', value: number) => void;
  updateClass: (data: string) => void;
  updateInventory: (items: Array<Item>) => void;
  updateGold: (gold: number) => void;
  updatePotion: (
    potion: 'healthPotions' | 'manaPotions',
    value: number
  ) => void;
}

const usePlayerStore = create<State & Actions>((set, get) => ({
  player: { name: '' } as Player,
  class: '',
  inventory: [],
  gold: 10000,
  healthPotions: 2,
  manaPotions: 1,
  establishInitialHero: (hero: Player) =>
    set(() => ({
      player: hero,
    })),
  updatePlayerHero: (stat: 'darkMastery' | 'attack', value: number) => {
    const getHero = get().player;
    set(() => ({
      player: { ...getHero, [stat]: getHero[stat] + value },
    }));
  },
  updateClass: (data: string) =>
    set(() => ({
      class: data,
    })),
  updateInventory: (items: Array<Item>) =>
    set((state) => ({
      inventory: [...state.inventory.concat(items)],
    })),
  updateGold: (gold: number) => set((state) => ({ gold: state.gold + gold })),
  updatePotion: (potion: 'healthPotions' | 'manaPotions', value: number) => {
    set((state) => ({
      [potion]: state[potion] + value,
    }));
  },
}));

export default usePlayerStore;
