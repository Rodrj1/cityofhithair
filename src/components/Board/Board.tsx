import { ShowBattleAction } from '../Announcers';
import { useAnnouncerStore, useBattleStore } from '../../stores';
import { BoardUnit } from './BoardUnit';
import { Centerer } from '../Centerer';
import { SkillPreview } from '../SkillPreview';
import style from '../../styles/Board.module.scss';
import ShowFireSkillQuestion from '../Announcers/ShowFireSkillQuestion';

const Board = () => {
  const currentEnemy = useBattleStore((state) => state.boardEnemy);
  const currentHero = useBattleStore((state) => state.boardPlayer);
  const isInFight = useBattleStore((state) => state.isInFight);
  const isPreviewVisible = useAnnouncerStore((state) => state.isPreviewVisible);
  const isSkillQuestion = useAnnouncerStore((state) => state.isSkillQuestion);
  const isAnnouncerVisible = useAnnouncerStore(
    (state) => state.isAnnouncerVisible
  );

  return (
    <div className={style.container}>
      <BoardUnit style={style} unit={currentHero} />

      <BoardUnit style={style} unit={currentEnemy} />

      {isInFight && isSkillQuestion && (
        <Centerer>
          <ShowFireSkillQuestion />
        </Centerer>
      )}

      {isInFight && isAnnouncerVisible && (
        <Centerer>
          <ShowBattleAction />
        </Centerer>
      )}

      {isPreviewVisible && (
        <Centerer>
          <SkillPreview />
        </Centerer>
      )}
    </div>
  );
};

export default Board;
