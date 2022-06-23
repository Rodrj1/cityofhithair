import { useGetPlayerStats } from "../../helpers/hooks/useGetPlayerStats";
import MapMain from "./MapMain";
import HeroSelection from "./MapHeroSelection";

const InitStage = () => {
  const { player, setPlayer } = useGetPlayerStats();

  return (
    <>
      {player.name == "" ? (
        <HeroSelection
          player={player}
          setPlayer={setPlayer}
        />
      ) : (
        <MapMain player={player} setPlayer={setPlayer} />
      )}
    </>
  );
};

export default InitStage;
