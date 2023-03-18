import { useEffect } from 'react';
import { itemIcons } from '../../../data/stats';
import { useBattleHandler } from '../../../features/components/Board';
import { useBattleStore } from '../../../stores';
import { Player, Unit } from '../../../types';
import { Bar } from '../../Bar';
import { Skill } from '../../Skill';

interface Props {
  style: CSSModuleClasses;
  unit: Player | Unit;
}

const BoardUnit = ({ style, unit }: Props) => {
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

  return (
    <div className={style.unit}>
      <div className={style.mainInfo}>
        <h4>{unit.name}</h4>

        <img
          src={unit.portrait}
          alt={unit.name}
          onClick={handleOnClick}
        />

        <Bar type={'health'} value={unit.health} maxValue={unit.maxHealth} />
        <Bar type={'mana'} value={unit.magic} maxValue={unit.maxMagic} />
      </div>

      <div className={style.extra}>
        <div className={style.stats}>
          <span>
            <img src={itemIcons.attack} alt="Attack" />
            <p>{unit.attack.toFixed(1)}</p>
          </span>

          <span>
            <img src={itemIcons.defense} alt="Defense" />
            <p>{unit.defense.toFixed(1)}</p>
          </span>

          {unit.darkMastery > 0 && (
            <span>
              <img src={itemIcons.darktome} alt="Dark Magic Mastery" />
              <p>{unit.darkMastery}</p>
            </span>
          )}

          {unit.criticalChance > 0 && (
            <span>
              <img src={itemIcons.critical} alt="Critical" />
              <p>{unit.criticalChance}%</p>
            </span>
          )}
        </div>

        <div className={style.skills}>
          {unit.skills.map((skill) => (
            <Skill skill={skill} key={skill.name} />
          ))}
        </div>

        {!isEnemy && (
          <div className={style.potions}>
            {(unit as Player).potions.map((skill) => (
              <Skill skill={skill} key={skill.name} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BoardUnit;
