import { create } from 'zustand';
import { Action, Item, ItemLoot, skill } from '../types';

interface State {
  loot: Array<ItemLoot>;
  announcerAction: Action;
  announcerText: string;
  skillPreviewInfo: skill;
  itemPreviewInfo: Item;
  isAnnouncerVisible: boolean;
  isPreviewVisible: boolean;
  isItemPreviewVisible: boolean;
}

interface Actions {
  updateLoot: (items: Array<ItemLoot>) => void;
  updateAnnouncerAction: (action: Action) => void;
  updateAnnouncerText: (text: string) => void;
  handleAnnouncer: () => void;
  handlePreview: (skill?: skill) => void;
  handlePreviewInfo: (skill: skill) => void;
  handleItemPreview: (item?: Item) => void;
  handleItemInfo: (item: Item) => void;
}


const useAnnouncerStore = create<State & Actions>((set, get) => ({
  announcerText: '',
  announcerAction: {} as Action,
  loot: [],
  skillPreviewInfo: {} as skill,
  itemPreviewInfo: {} as Item,
  isAnnouncerVisible: false,
  isPreviewVisible: false,
  isItemPreviewVisible: false,
  updateLoot: (items: Array<ItemLoot>) => set({ loot: items }),
  updateAnnouncerAction: (action: Action) => set({ announcerAction: action }),
  updateAnnouncerText: (text: string) => set({ announcerText: text }),
  handleAnnouncer: () =>
    set((state) => ({
      isAnnouncerVisible: !state.isAnnouncerVisible,
    })),
  handlePreview: (skill?: skill) => {
    if (skill) {
      const getPreviewInfoHandler = get().handlePreviewInfo;
      getPreviewInfoHandler(skill);
    }
    set((state) => ({
      isPreviewVisible: !state.isPreviewVisible,
    }));
  },
  handlePreviewInfo: (skill: skill) => set({ skillPreviewInfo: skill }),
  handleItemPreview: (item?: Item) => {
    if (item) {
      const getPreviewInfoHandler = get().handleItemInfo;
      getPreviewInfoHandler(item);
    }
    set((state) => ({
      isItemPreviewVisible: !state.isItemPreviewVisible,
    }));
  },
  handleItemInfo: (item: Item) => set({ itemPreviewInfo: item }),
}));

export default useAnnouncerStore;
