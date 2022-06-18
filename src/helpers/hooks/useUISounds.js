import useSound from "use-sound";
import hover from "../../sound/hover.mp3";
import grabcoin from "../../sound/grabcoin.mp3";
import warning from "../../sound/warning.mp3";

export const useUISounds = () => {

  const [playHover] = useSound(hover, { volume: 1 });
  const [playGrabCoin] = useSound(grabcoin, { volume: 0.7 });
  const [playWarning] = useSound(warning, { volume: 0.7 });

  return {
    playHover,
    playGrabCoin,
    playWarning
  };
};
