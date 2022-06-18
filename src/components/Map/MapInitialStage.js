import { useGetPlayerStats } from "../../helpers/hooks/useGetPlayerStats";
import MainMap from "./MapMainLayout";
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
        <MainMap player={player} setPlayer={setPlayer} />
      )}
    </>
  );
};

export default InitStage;
