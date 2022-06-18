import Bar from "../MiscComponents/Bar";
import AttributesTemplate from "./BoardAttributes";
import ButtonPlayer from "../MiscComponents/ButtonPlayer";
import skillsIcons from "../../data/iconSkills";
import { skillsInfo } from "../../data/dataTooltips";

const BoardEnemyTemplate = ({ enemyAttributes, getSelected }) => {
  return (
    <div className={`${enemyAttributes.difficulty}`} onClick={getSelected}>
      <div className="attributes-template">
        <h4 style={{ fontSize: "20px", color: "red" }}>
          {enemyAttributes.name}
        </h4>
        <img
          src={enemyAttributes.portrait}
          className="board-portrait"
          alt={enemyAttributes.name}
        />

        <Bar
          classWidth={"hundredWidth"}
          value={parseFloat(enemyAttributes.health).toFixed(1)}
          maxValue={parseFloat(enemyAttributes.maxHealth).toFixed(1)}
        />
        <Bar
          classWidth={"hundredWidth"}
          type={"mana"}
          value={enemyAttributes.magic}
          maxValue={enemyAttributes.maxMagic}
        />
        <div className="attributes-child">
          <div className="skills">
          <ButtonPlayer
                img={skillsIcons.attack}
                id="attack"
                tooltipText={skillsInfo.attack}
                iconClass="icon-img"
                buttonClass="button-player"
              />
            {enemyAttributes.skills?.map((el) => (
              <ButtonPlayer
                key={el.id}
                img={el.img}
                id={el.id}
                tooltipText={el.tooltipText}
                iconClass={el.iconClass}
                buttonClass={el.buttonClass}
              />
            ))}
          </div>
          <div className="stats">
            <AttributesTemplate {...enemyAttributes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardEnemyTemplate;
