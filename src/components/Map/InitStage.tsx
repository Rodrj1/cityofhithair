import { usePlayerStore } from '../../stores';
import { HeroSelection } from '../HeroSelection';
import MapMain from './MapMain';

const InitStage = () => {
  const getPlayerHero = usePlayerStore((state) => state.player);

  return <>{getPlayerHero.name == '' ? <HeroSelection /> : <MapMain />}</>;
};

export default InitStage;
