import { notesInfo } from '../../../data/general/dialogTexts';
import {
  cemeteryLoot,
  darkPassageLoot,
  lostGalleryLoot,
  mausoleumLoot,
} from '../../../data/loot';
import { itemIcons } from '../../../data/stats';
import {
  useAnnouncerStore,
  useDialogStore,
  useLevelsStore,
  usePlayerStore,
} from '../../../stores';

export const useLoot = () => {
  const { updateNoteStatus, updateNote } = useDialogStore();
  const { updateLevelsCompletion } = useLevelsStore();
  const { updateGold, updateInventory, updatePotion } = usePlayerStore();
  const { handleAnnouncer, updateLoot } = useAnnouncerStore();

  const showKoetriaNote = () => {
    updateNoteStatus();
    const updateNoteInfo = {
      name: 'Tome: Of Koetria',
      text: notesInfo.ofKoetria,
    };
    updateNote(updateNoteInfo);
  };

  const showOfThinmel = () => {
    updateNoteStatus();
    const updateNoteInfo = {
      name: 'Tome: Of Thinmel',
      text: notesInfo.ofThinmel,
    };
    updateNote(updateNoteInfo);
  };

  const showJournalPI = () => {
    updateNoteStatus();
    const updateNoteInfo = {
      name: 'Journal - Part I',
      text: notesInfo.journalPartI,
    };
    updateNote(updateNoteInfo);
  };

  const showJournalPII = () => {
    updateNoteStatus();
    const updateNoteInfo = {
      name: 'Journal - Part II',
      text: notesInfo.journalPartII,
    };
    updateNote(updateNoteInfo);
  };

  const showJournalPIII = () => {
    updateNoteStatus();
    const updateNoteInfo = {
      name: 'Journal - Part III',
      text: notesInfo.journalPartII,
    };
    updateNote(updateNoteInfo);
  };

  const showJournalHawnyr = () => {
    updateNoteStatus();
    const updateNoteInfo = {
      name: 'Journal - Hawnyr',
      text: notesInfo.journalHawnyr,
    };
    updateNote(updateNoteInfo);
  };

  const handleLoot = (enemyLevel: string) => {
    updateLevelsCompletion(enemyLevel);
    handleAnnouncer();
    switch (enemyLevel) {
      case 'cemeteryEnemies':
        updateGold(+100);
        updateInventory([
          {
            fn: showJournalPI,
            image: itemIcons.note,
            name: 'journal-I',
            cost: 0,
            description: '',
          },
          {
            fn: showKoetriaNote,
            image: itemIcons.note,
            name: 'ofKoetria',
            cost: 0,
            description: '',
          },
        ]);
        updateLoot(cemeteryLoot);
        updatePotion("manaPotions", 1)
        updatePotion("healthPotions", 1)
        break;
      case 'mausoleumEnemies':
        updateGold(+175);
        updateLoot(mausoleumLoot);
        updateInventory([
          {
            fn: showJournalPII,
            image: itemIcons.note,
            name: 'journal-II',
            cost: 0,
            description: '',
          },
        ]);
        updatePotion("healthPotions", 1)
        break;
      case 'dPassageEnemies':
        updateGold(+280);
        updateLoot(darkPassageLoot);
        updateInventory([
          {
            fn: showJournalPIII,
            image: itemIcons.note,
            name: 'journal-III',
            cost: 0,
            description: '',
          },
        ]);
        updatePotion("healthPotions", 2)
        updatePotion("manaPotions", 1)
        break;
      case 'lostGalleryEnemies':
        updateLoot(lostGalleryLoot);
        updateInventory([
          {
            fn: showJournalHawnyr,
            image: itemIcons.note,
            name: 'journal-Hawnyr',
            cost: 0,
            description: '',
          },
          {
            fn: showOfThinmel,
            image: itemIcons.note,
            name: 'of-thinmel',
            cost: 0,
            description: '',
          },
        ]);
        break;
    }
  };

  return { handleLoot };
};
