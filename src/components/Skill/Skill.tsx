import { skill } from '../../types';
import {
  useAnnouncerStore,
  useBattleStore,
  usePlayerStore,
} from '../../stores';
import previewimg from '../../assets/skills/preview.webp';
import { useEffect, useState } from 'react';

interface Props {
  skill: skill;
}

const Skill = ({ skill }: Props) => {
  const { updateAction } = useBattleStore();
  const { handlePreview, handleSkillQuestion } = useAnnouncerStore();
  const { updateSelectedSkill } = usePlayerStore();
  const healthpotions = usePlayerStore((state) => state.healthPotions);
  const manaPotions = usePlayerStore((state) => state.manaPotions);
  const selectedSkill = usePlayerStore((state) => state.selectedSkill);

  const [storeSkillIcon, setStoreSkillIcon] = useState<JSX.Element>();

  const handleSkillAction = (action: string) => {
    updateAction(action);
    updateSelectedSkill(skill);
    if (action == 'Frenzy') handleSkillQuestion();
    if (action == 'Defend') handleSkillQuestion();
    if (action == 'Potion Of Life') handleSkillQuestion();
    if (action == 'Potion Of Magic') handleSkillQuestion();
  };

  useEffect(() => {
    if (selectedSkill === skill) {
      setStoreSkillIcon(
        <img
          className="skillClicked"
          src={skill.image}
          alt={skill.name}
          onClick={() => handleSkillAction(skill.name)}
        />
      );
    } else
      setStoreSkillIcon(
        <img
          src={skill.image}
          alt={skill.name}
          onClick={() => handleSkillAction(skill.name)}
        />
      );
  }, [selectedSkill]);

  return (
    <div>
      {storeSkillIcon}

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
