import BoardEnemyTemplate from "./BoardEnemyTemplate";

const BoardEnemy = ({ enemyAttributes, getSelected }) => {
  return (
      <div className="grid-board-item">
        <BoardEnemyTemplate
          enemyAttributes={enemyAttributes}
          getSelected={getSelected}
        />
      </div>
  );
};

export default BoardEnemy;
