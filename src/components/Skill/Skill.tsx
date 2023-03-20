import { skill } from '../../types';
import { useBattleHandler } from '../../features/components/Board';
import {
  useAnnouncerStore,
  useBattleStore,
  usePlayerStore,
} from '../../stores';
import previewimg from '../../assets/skills/preview.webp';

interface Props {
  skill: skill;
}

const Skill = ({ skill }: Props) => {
  const { updateAction } = useBattleStore();
  const { handlePreview } = useAnnouncerStore();
  const { handleActionOnEnemy } = useBattleHandler();
  const healthpotions = usePlayerStore((state) => state.healthPotions);
  const manaPotions = usePlayerStore((state) => state.manaPotions);

  const handleSkillAction = (action: string) => {
    updateAction(action);

    if (action == 'Frenzy') handleActionOnEnemy(action);
    if (action == 'Defend') handleActionOnEnemy(action);
    if (action == 'Potion Of Life') handleActionOnEnemy(action);
    if (action == 'Potion Of Magic') handleActionOnEnemy(action);
  };

  return (
    <div>
      <img
        src={skill.image}
        alt={skill.name}
        onClick={() => handleSkillAction(skill.name)}
      />

      {skill.name == 'Potion Of Life' && (
        <span className="value">{healthpotions}</span>
      )}
      {skill.name == 'Potion Of Magic' && (
        <span className="value">{manaPotions}</span>
      )}
      <img
        className=""
        src={previewimg}
        alt="Eye button for preview"
        onClick={() => handlePreview(skill)}
      />
    </div>
  );
};

export default Skill;
