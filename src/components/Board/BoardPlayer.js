import Bar from "../MiscComponents/Bar";
import SkillsTemplate from "./BoardSkills";
import AttributesTemplate from "./BoardAttributes";

const BoardPlayer = ({
  player,
  attack,
  defend,
  castFrenzy,
  drinkPotion,
  drainAttack,
  castWeakness,
  castVulnerability,
  castBlindness,
  castDrainLife,
  buyBlindness
}) => {

  return (
    <>
      {player.status != "dead" ? (
        <>
          <div className="grid-board-item player">
            <div className="attributes-template">
              <h4 style={{ fontSize: "20px" }}>{player.name}</h4>
              <div>
                <img
                  src={player.portrait}
                  className="board-portrait"
                  alt={player.name}
                />
              </div>

              <Bar
                classWidth={"hundredWidth"}
                type={"life"}
                value={parseFloat(player.health).toFixed(1)}
                maxValue={parseFloat(player.maxHealth).toFixed(1)}
              />

              <Bar
                classWidth={"hundredWidth"}
                type={"mana"}
                value={player.magic}
                maxValue={player.maxMagic}
              />

              <div className="attributes-child">
                <div className="skills">
                  <SkillsTemplate
                    heroClass={player.heroClass}
                    attack={attack}
                    defend={defend}
                    castFrenzy={castFrenzy}
                    drinkPotion={drinkPotion}
                    drainAttack={drainAttack}
                    castWeakness={castWeakness}
                    castVulnerability={castVulnerability}
                    castDrainLife={castDrainLife}
                    castBlindness={castBlindness}
                    buyBlindness={buyBlindness}
                  />
                </div>
                <div className="stats">
                  <AttributesTemplate {...player} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default BoardPlayer;
