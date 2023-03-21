import { useBattleHandler } from '../../features/components/Board';
import {
  useAnnouncerStore,
  useBattleStore,
  usePlayerStore,
} from '../../stores';
import style from '../../styles/ShowFireSkillQuestion.module.scss';

const ShowFireSkillQuestion = () => {
  const { handleSkillQuestion } = useAnnouncerStore();
  const { handleActionOnEnemy } = useBattleHandler();
  const selectedSkill = usePlayerStore((state) => state.selectedSkill);
  const isInFight = useBattleStore((state) => state.isInFight);

  const triggerskill = () => {
    if (isInFight) {
      handleSkillQuestion();
      handleActionOnEnemy(selectedSkill.name);
    }
  };

  return (
    <div className={style.container}>
      <p>Do you wanna use {selectedSkill.name} on self?</p>
      <img src={selectedSkill.image} alt={selectedSkill.name} />

      <button onClick={triggerskill}>Yes</button>
      <button onClick={handleSkillQuestion}>Close</button>
    </div>
  );
};

export default ShowFireSkillQuestion;
