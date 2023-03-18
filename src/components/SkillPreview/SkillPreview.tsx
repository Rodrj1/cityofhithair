import { useAnnouncerStore } from '../../stores';
import style from '../../styles/SkillPreview.module.scss';

const SkillPreview = () => {
  const { handlePreview } = useAnnouncerStore();
  const skill = useAnnouncerStore((state) => state.skillPreviewInfo);

  return (
    <div className={style.container}>
      <div>
        <img src={skill.image} alt={skill.name} />
        {skill.cost > 0 && <span>Spiritual Cost: {skill.cost}</span>}
        <button onClick={() => handlePreview()}>Close</button>
      </div>
      <div>
        <h2>{skill.name}</h2>
        <p>{skill.description}</p>
      </div>
    </div>
  );
};

export default SkillPreview;
