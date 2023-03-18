import useSound from 'use-sound';
import swordSound from '../../assets/sound/swordSlash.mp3';
import spelldefend from '../../assets/sound/spelldefend.wav';
import spellvulnerability from '../../assets/sound/spellvulnerability.wav';
import spellweakness from '../../assets/sound/spellweakness.wav';
import spellfrenzy from '../../assets/sound/spellfrenzy.wav';
import spelldrainlife from '../../assets/sound/spelldrainlife.wav';
import drinkpotion from '../../assets/sound/drinkpotion.ogg';
import drinkpotionmana from '../../assets/sound/drinkpotionmana.ogg';

export const useActionSounds = () => {
  const [playAttack] = useSound(swordSound, { volume: 1 });

  const [playFrenzy] = useSound(spellfrenzy, { volume: 1 });

  const [playDefend] = useSound(spelldefend, { volume: 1 });

  const [playWeakness] = useSound(spellweakness, { volume: 1 });

  const [playVulnerability] = useSound(spellvulnerability, { volume: 1 });

  const [playDrainLife] = useSound(spelldrainlife, { volume: 1 });

  const [playDrinkPotion] = useSound(drinkpotion, { volume: 1 });

  const [playDrinkPotionMana] = useSound(drinkpotionmana, { volume: 1 });

  return {
    playAttack,
    playFrenzy,
    playDefend,
    playWeakness,
    playVulnerability,
    playDrainLife,
    playDrinkPotion,
    playDrinkPotionMana
  };
};
