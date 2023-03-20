import { useEffect } from 'react';
import { useBattleStore } from '../../../../stores';
import { Player, Unit } from '../../../../types';
import { useBattleHandler } from '../useBattleHandler';

interface Props {
  unit: Player | Unit;
}

export const useBoardUnit = ({ unit }: Props) => {
  const { handleActionOnEnemy } = useBattleHandler();
  const currentAction = useBattleStore((state) => state.action);
  const turn = useBattleStore((state) => state.turn);
  const isEnemy = (unit as Player).player == undefined;
  const isEnemyTurn = turn == 'Enemy' && isEnemy;
  const isPlayerTurn = currentAction != '' && isEnemy && turn == 'Player';

  const handleOnClick = () => {
    if (isPlayerTurn) {
      handleActionOnEnemy(currentAction);
    }
  };

  useEffect(() => {
    if (isEnemyTurn && isEnemy) {
      let enemyAction = Math.floor(Math.random() * unit.skills.length);
      const action = unit.skills[enemyAction].name;
      if (action == 'Weakness' || action == 'Vulnerability') {
        if (unit.magic >= 2) handleActionOnEnemy(unit.skills[enemyAction].name);
        else handleActionOnEnemy('Attack');
      } else if (action == 'Drain Life') {
        if (unit.magic >= 3) handleActionOnEnemy(unit.skills[enemyAction].name);
        else handleActionOnEnemy('Attack');
      } else handleActionOnEnemy('Attack');
    }
  }, [turn]);

  return { handleOnClick, isEnemy };
};
