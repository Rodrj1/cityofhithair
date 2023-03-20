import { useEffect, useState } from 'react';

interface Props {
  track: string;
}

export const useMusicPlayer = ({ track }: Props) => {
  const [musicIsPlaying, setMusicIsPlaying] = useState(true);

  const handleOnClick = () => {
    setMusicIsPlaying((current) => !current);
    const music = document.getElementById('music') as HTMLAudioElement;
    if (music) {
      music.volume = 0.31;
      if (musicIsPlaying == false) music.play();
      else music.pause();
    }
  };

  useEffect(() => {
    const music = document.getElementById('music') as HTMLAudioElement;
    music.volume = 0.31;
    if (musicIsPlaying == false && music) {
      music.pause();
    }
  }, [track]);

  return { musicIsPlaying, handleOnClick };
};
