import heroPortraits from "../../data/portraitsHeroes";
import ButtonPlayer from "../MiscComponents/ButtonPlayer";
import skillsIcons from "../../data/iconSkills";
import { skillsInfo } from "../../data/dataTooltips";

const HeroSelectionTemplate = ({ getSelected }) => {

  return (
      <div className="grid-hero-selection">
        <h1>CHOOSE YOUR CHARACTER</h1>
        <div className="grid-hero-selection-item">
          <div className="template-flex-container">
            <div className="template-character">
              <h4>Knight</h4>
              <img
                src={heroPortraits.knight}
                className="portrait-img"
                onClick={() => getSelected("knight")}
                alt={"Knight"}
              />

              <h5>Health: {parseFloat(65).toFixed(1)}</h5>
              <h5>Attack: {parseFloat(10).toFixed(1)}</h5>
              <h5>Defense: {parseFloat(40).toFixed(1)}</h5>
              <h5>Spiritual Power: {parseFloat(2).toFixed(1)}</h5>
              <h5>Potions: {2}</h5>
            </div>
            <div className="template-skills">
              <ButtonPlayer
                img={skillsIcons.attack}
                id="attack"
                tooltipText={skillsInfo.attack}
                iconClass="icon-img"
                buttonClass="button-player"
              />

              <ButtonPlayer
                img={skillsIcons.defend}
                id="defend"
                tooltipText={skillsInfo.defend}
                iconClass="icon-img"
                buttonClass="button-player"
              />

              <ButtonPlayer
                img={skillsIcons.frenzy}
                id="frenzy"
                tooltipText={skillsInfo.frenzy}
                iconClass="icon-img"
                buttonClass="button-player"
              />

              <ButtonPlayer
                img={skillsIcons.potion}
                id="drinkPotion"
                tooltipText={skillsInfo.drinkPotion}
                iconClass="icon-img"
                buttonClass="button-player"
              />
            </div>
          </div>
        </div>

        <div className={`grid-hero-selection-item`}>
          <div className="template-flex-container">
            <div className="template-character">
              <h4>Dark Mage</h4>
              <img
                src={heroPortraits.darkmage}
                onClick={() => getSelected("darkmage")}
                className={"portrait-img"}
                alt={"Dark Mage"}
              />

              <h5>Health: {parseFloat(47).toFixed(1)}</h5>
              <h5>Attack: {parseFloat(5).toFixed(1)}</h5>
              <h5>Defense: {parseFloat(20).toFixed(1)}</h5>
              <h5>Spiritual Power: {parseFloat(8).toFixed(1)}</h5>
              <h5>Dark Magic Mastery: {2}</h5>
            </div>
            <div className="template-skills">
              <ButtonPlayer
                img={skillsIcons.dmAttack}
                id="drainAttack"
                tooltipText={skillsInfo.drainAttack}
                iconClass="icon-img"
                buttonClass="button-player"
              />

              <ButtonPlayer
                img={skillsIcons.weakness}
                id="castWeaknessText"
                tooltipText={skillsInfo.weakness}
                iconClass="icon-img"
                buttonClass="button-player"
              />

              <ButtonPlayer
                img={skillsIcons.vulnerability}
                id="castVulnerabilityText"
                tooltipText={skillsInfo.vulnerability}
                iconClass="icon-img"
                buttonClass="button-player"
              />

              <ButtonPlayer
                img={skillsIcons.stealLife}
                id="drainLifeText"
                tooltipText={skillsInfo.drainLife}
                iconClass="icon-img"
                buttonClass="button-player"
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default HeroSelectionTemplate;
