import { useBattleStore, usePlayerStore } from '../../stores';
import { Unit } from '../../types';

interface Props {
  enemy: Unit;
}

const Enemy = ({ enemy }: Props) => {
  const { updateFightingStatus, updateBoardEnemy, updateBoardPlayer } =
    useBattleStore();
  const getPlayerHero = usePlayerStore((state) => state.player);

  const getSelected = () => {
    updateFightingStatus();
    const selectEnemy = { ...enemy };
    updateBoardEnemy(selectEnemy);
    const sendPlayerHero = { ...getPlayerHero };
    updateBoardPlayer(sendPlayerHero);
  };

  return (
    <>
      <img
        src={enemy.portraitFace ? enemy.portraitFace : enemy.portrait}
        onClick={getSelected}
        alt={enemy.name}
      />

      <div>
        <h4>{enemy.name}</h4>
      </div>
    </>
  );
};

export default Enemy;
