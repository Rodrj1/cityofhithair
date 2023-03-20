import SelectHeroName from '../SelectHeroName/SelectHeroName';
import { animated } from '@react-spring/web';
import { heroPortraits } from '../../data/general';
import { Centerer } from '../Centerer';
import { wizardStats, knightStats } from '../../data/stats';
import { Skill } from '../Skill';
import { SkillPreview } from '../SkillPreview';
import { useHeroSelection } from '../../features/components/HeroSelection';
import style from '../../styles/HeroSelection.module.scss';

const HeroSelection = () => {
  const { selectNameIsVisible, isPreviewVisible, animationProps, getSelected } =
    useHeroSelection();

  return (
    <animated.div style={animationProps} className="maxHeight">
      {selectNameIsVisible && (
        <Centerer>
          <div className={style.selectHeroName}>
            <SelectHeroName />
          </div>
        </Centerer>
      )}

      {isPreviewVisible && (
        <Centerer>
          <SkillPreview />
        </Centerer>
      )}

      <div className={style.container}>
        <h1>CHOOSE YOUR CHARACTER</h1>
        <div className={style.hero}>
          <div>
            <img
              src={heroPortraits.knight}
              className="portrait-img"
              onClick={() => getSelected('knight')}
              alt={'Knight'}
            />

            <div className={style.skills}>
              {knightStats.skills.map((skill) => (
                <Skill key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <div className={style.stats}>
            <h4>Knight</h4>
            <h5>Health: 65</h5>
            <h5>Attack: 11</h5>
            <h5>Defense: 5</h5>
            <h5>Spiritual Power: 2</h5>
          </div>
        </div>

        <div className={style.hero}>
          <div>
            <img
              src={heroPortraits.darkmage}
              onClick={() => getSelected('darkmage')}
              className={'portrait-img'}
              alt={'Dark Mage'}
            />

            <div className={style.skills}>
              {wizardStats.skills.map((skill) => (
                <Skill key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <div className={style.stats}>
            <h4>Dark Mage</h4>
            <h5>Health: 47</h5>
            <h5>Attack: 5</h5>
            <h5>Defense: 1</h5>
            <h5>Spiritual Power: 8</h5>
            <h5>Dark Magic Mastery: {2}</h5>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default HeroSelection;
