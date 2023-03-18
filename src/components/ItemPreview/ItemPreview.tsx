import { useAnnouncerStore } from '../../stores';
import style from '../../styles/SkillPreview.module.scss';

const ItemPreview = () => {
  const { handleItemPreview } = useAnnouncerStore();
  const item = useAnnouncerStore((state) => state.itemPreviewInfo);

  return (
    <div className={style.container}>
      <div>
        <img src={item.image} alt={item.name} />
        <span>{item.cost} Gold</span>
        <button onClick={item.fn}>Buy</button>
        <button onClick={() => handleItemPreview()}>Close</button>
      </div>
      <div>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default ItemPreview;
