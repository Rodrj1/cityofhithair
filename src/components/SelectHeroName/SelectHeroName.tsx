import { useState } from 'react';
import { usePlayerStore } from '../../stores';
import { knightStats, wizardStats } from '../../data/stats';

const SelectHeroName = () => {
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

  return (
    <>
      <h4 className="input-item">What is your name?</h4>

      <input
        className="input-item"
        type="text"
        id="getName"
        name="getName"
        onChange={handleOnChange}
      />

      <button onClick={updateName}>Confirm Name</button>
    </>
  );
};

export default SelectHeroName;
