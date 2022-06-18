import useSound from "use-sound";
// * Import Sounds
import swordSound from "../../sound/swordSlash.mp3";
import shieldSound from "../../sound/shield.mp3";
import magicSound from "../../sound/magic.mp3";

export const useActionSounds = () => {
  const [playAttack] = useSound(swordSound, { volume: 0.1 });

  const [playDefense] = useSound(shieldSound, { volume: 0.1 });

  const [playMagic] = useSound(magicSound, { volume: 0.1 });

  return {
    playAttack,
    playDefense,
    playMagic,
  };
};
