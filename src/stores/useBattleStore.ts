import { create } from 'zustand';
import { Player, Unit } from '../types';

interface State {
  isInFight: boolean;
  action: string;
  turn: string;
  boardEnemy: Unit;
  boardPlayer: Player;
}

interface Actions {
  updateFightingStatus: () => void;
  updateAction: (action: string) => void;
  updateTurn: () => void;
  resetTurn: () => void;
  updateBoardEnemy: (enemy: Unit) => void;
  updateBoardPlayer: (enemy: Player) => void;
}

const useBattleStore = create<State & Actions>((set, get) => ({
  isInFight: false,
  action: '',
  turn: 'Player',
  boardEnemy: {} as Unit,
  boardPlayer: {} as Player,
  updateAction: (action: string) => set({ action: action }),
  updateTurn: () => {
    const getTurn = get().turn;
    const newTurn = getTurn == 'Player' ? 'Enemy' : 'Player';
    set({ turn: newTurn });
  },
  resetTurn: () => set({ turn: 'Player' }),
  updateFightingStatus: () =>
    set((state) => ({
      isInFight: !state.isInFight,
    })),
  updateBoardEnemy: (enemy: Unit) => set({ boardEnemy: enemy }),
  updateBoardPlayer: (playerHero: Player) => set({ boardPlayer: playerHero })
}));

export default useBattleStore;
