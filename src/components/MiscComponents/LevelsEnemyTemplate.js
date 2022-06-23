import { useUISounds } from "../../helpers/hooks/useUISounds";

const LevelsEnemyTemplate = ({
  enemy,
  id,
  setFight,
  setEnemy,
  enemies,
  setEnemies,
  setEnemiesAmount,
}) => {
  const { playHover } = useUISounds();

  const getSelected = () => {
    setFight(true);
    const selectEnemy = {
      ...enemy,
      name: enemy.name,
      health: enemy.health,
      maxHealth: enemy.health,
    };
    setEnemy(selectEnemy);
    const removeEnemy = enemies.filter((enemy) => enemy.id !== id);
    setEnemiesAmount((currAmount) => currAmount - 1);
    setEnemies(removeEnemy);
  };

  return (
    <div className="units-flex-item" key={enemy.id}>
      {enemy.status == "alive" ? (
        <>
          <div>
            <p style={{ color: "red" }}>{enemy.name}</p>
            <p style={{ color: "grey" }}>{enemy.difficulty}</p>
          </div>
          <img
            src={enemy.portraitFace ? enemy.portraitFace : enemy.portrait}
            onClick={getSelected}
            onMouseOver={playHover}
            alt={enemy.name}
          />
        </>
      ) : null}
    </div>
  );
};

export default LevelsEnemyTemplate;
