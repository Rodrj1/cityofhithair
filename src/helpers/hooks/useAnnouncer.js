import { useState, useEffect } from "react";

export const useAnnouncer = () => {
  const [hideAnnouncer, setHideAnnouncer] = useState(true);

  const showAnnouncer = () => {
    if (hideAnnouncer) {
      setHideAnnouncer((current) => !current);
      setTimeout(() => {
        setHideAnnouncer((current) => !current);
      }, 1000);
    }
  };

  return {
    showAnnouncer,
    hideAnnouncer,
    setHideAnnouncer,
  };
};
