import { useState } from "react";

export const useAnnouncerLoot = () => {
  const [hideLoot, setHideLoot] = useState(true);

  const onHideLoot = () => {
    if (hideLoot == false) {
      setHideLoot((current) => !current);
    }
  };

  return {
    hideLoot,
    setHideLoot,
    onHideLoot,
  };
};
