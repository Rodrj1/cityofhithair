import { useState } from 'react';
import { knightStats, wizardStats } from '../../../data/stats';
import { usePlayerStore } from '../../../stores';

export const useSelectHeroName = () => {
  const [tempName, setTempName] = useState('');
  const getClass = usePlayerStore((state) => state.class);
  const { establishInitialHero } = usePlayerStore();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempName(e.target.value);
  };

  const updateName = () => {
    if (getClass == 'knight') {
      const updateHero = { ...knightStats, name: tempName };
      establishInitialHero(updateHero);
    } else if (getClass == 'darkmage') {
      const updateHero = { ...wizardStats, name: tempName };
      establishInitialHero(updateHero);
    }
  };

  return {handleOnChange, updateName};
};
