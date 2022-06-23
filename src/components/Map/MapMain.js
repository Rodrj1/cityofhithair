import { useState } from "react";
// * Components
import MapPresentation from "./MapPresentation";
import MapLayout from "./MapLayout";
// * Data/UI
import GameOver from "./MapGameOver";

const MapMain = ({ player, setPlayer }) => {
  const [mapPresentation, setMapPresentation] = useState(true);

  // * Preset fight

  const [fight, setFight] = useState(false);
  const [isPlayerAlive, setIsPlayerAlive] = useState(true);

  return (
    <>
      {mapPresentation ? (
        <MapPresentation setMapPresentation={setMapPresentation} />
      ) : null}

      <MapLayout
        fight={fight}
        setFight={setFight}
        player={player}
        setPlayer={setPlayer}
        setIsPlayerAlive={setIsPlayerAlive}
      />

      {!isPlayerAlive ? <GameOver /> : null}
    </>
  );
};

export default MapMain;
