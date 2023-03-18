import { useAnnouncerStore } from '../../stores';
import style from "../../styles/ShowItemBought.module.scss";

const ShowItemBought = () => {
  const text = useAnnouncerStore((state) => state.announcerText);
  const { handleAnnouncer } = useAnnouncerStore();

  return (
    <div className={style.container}>
      <p>{text}</p>

      <button onClick={handleAnnouncer}>Close</button>
    </div>
  );
};

export default ShowItemBought;
