import grabcoin from "../../assets/sound/grabcoin.mp3";
import warning from "../../assets/sound/warning.ogg";
import { useSound } from "use-sound";


export const useUISounds = () => {

  const [playGrabCoin] = useSound(grabcoin, { volume: 1 });
  const [playWarning] = useSound(warning, { volume: 1 });

  return {
    playGrabCoin,
    playWarning
  };
};
