import { useAnnouncerStore } from '../../stores';
import style from '../../styles/ShowBattleAction.module.scss';

const ShowBattleAction = () => {
  const action = useAnnouncerStore((state) => state.announcerAction);

  return (
    <div className={style.container}>
      <div>
        {action.attackerImg && (
          <img src={action.attackerImg} alt={'Attacker'} />
        )}
      </div>

      <div className={style.action}>
        <p>{action.text}</p>
        {action.skillIcon && (
          <img src={action.skillIcon} alt={'Spell Casted'} />
        )}
      </div>

      {action.receiverImg && action.receiverImg != action.attackerImg && (
        <img src={action.receiverImg} alt={'Receiver'} />
      )}
    </div>
  );
};

export default ShowBattleAction;
