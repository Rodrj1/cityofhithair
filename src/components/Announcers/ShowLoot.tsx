import { useAnnouncerStore, useBattleStore } from '../../stores';
import style from '../../styles/ShowLoot.module.scss';
import { Centerer } from '../Centerer';

interface Props {
  text: string;
}

const ShowLoot = ({ text }: Props) => {
  const { handleAnnouncer } = useAnnouncerStore();
  const getLoot = useAnnouncerStore((state) => state.loot);
  const isVisible = useAnnouncerStore((state) => state.isAnnouncerVisible);
  const isInFight = useBattleStore((state) => state.isInFight);

  const handleOnExit = () => {
    handleAnnouncer();
  };

  return (
    <>
      {isVisible && !isInFight && (
        <Centerer>
          <div className={style.container}>
            <p>{text}</p>
            <div className={style.items}>
              {getLoot.map((loot, index) => (
                <div key={index}>
                  <img src={loot.image} alt={loot.name} />
                  <p>{loot.name}</p>
                </div>
              ))}
            </div>
            <button onClick={handleOnExit}>Close</button>
          </div>
        </Centerer>
      )}
    </>
  );
};

export default ShowLoot;
