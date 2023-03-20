import { itemIcons } from '../../../data/stats';
import { useBoardUnit } from '../../../features/components/Board/BoardUnit';
import { Player, Unit } from '../../../types';
import { Bar } from '../../Bar';
import { Skill } from '../../Skill';

interface Props {
  style: CSSModuleClasses;
  unit: Player | Unit;
}

const BoardUnit = ({ style, unit }: Props) => {
  const { handleOnClick, isEnemy } = useBoardUnit({ unit });

  return (
    <div className={style.unit}>
      <div className={style.mainInfo}>
        <h4>{unit.name}</h4>

        <img src={unit.portrait} alt={unit.name} onClick={handleOnClick} />

        <Bar type={'health'} value={unit.health} maxValue={unit.maxHealth} />
        <Bar type={'mana'} value={unit.magic} maxValue={unit.maxMagic} />
      </div>

      <div className={style.extra}>
        <div className={style.stats}>
          <span>
            <img src={itemIcons.attack} alt="Attack" />
            <p>
              {unit.weaknessStatus == true ? (
                <span className={style.affected}>
                  {unit.attack.toFixed(1)}{' '}
                </span>
              ) : (
                unit.attack.toFixed(1)
              )}
            </p>
          </span>

          <span>
            <img src={itemIcons.defense} alt="Defense" />
            <p>
              {' '}
              {unit.vulnerabilityStatus == true ? (
                <span className={style.affected}>
                  {unit.defense.toFixed(1)}{' '}
                </span>
              ) : (
                unit.defense.toFixed(1)
              )}
            </p>
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
