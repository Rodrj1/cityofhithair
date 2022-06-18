import ButtonPlayer from "../MiscComponents/ButtonPlayer";
import skillsIcons from "../../data/iconSkills";
import { skillsInfo } from "../../data/dataTooltips";

const SkillsTemplate = ({
  heroClass,
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
      {/* Dark Mage */}

      {heroClass == "Dark Mage" ? (
        <ButtonPlayer
          fn={drainAttack}
          img={skillsIcons.dmAttack}
          id="drainAttack"
          tooltipText={skillsInfo.drainAttack}
          iconClass="icon-img"
          buttonClass="button-player"
        />
      ) : null}

      {heroClass == "Dark Mage" ? (
        <ButtonPlayer
          fn={castWeakness}
          img={skillsIcons.weakness}
          id="castWeakness"
          tooltipText={skillsInfo.weakness}
          iconClass="icon-img"
          buttonClass="button-player"
        />
      ) : null}

      {heroClass == "Dark Mage" ? (
        <ButtonPlayer
          fn={castVulnerability}
          img={skillsIcons.vulnerability}
          id="castVulnerability"
          tooltipText={skillsInfo.vulnerability}
          iconClass="icon-img"
          buttonClass="button-player"
        />
      ) : null}

      {heroClass == "Dark Mage" ? (
        <ButtonPlayer
          fn={castDrainLife}
          img={skillsIcons.stealLife}
          id="drainLife"
          tooltipText={skillsInfo.drainLife}
          iconClass="icon-img"
          buttonClass="button-player"
        />
      ) : null}

      {buyBlindness ? (
        <>
          {heroClass == "Dark Mage" ? (
            <ButtonPlayer
              fn={castBlindness}
              img={skillsIcons.blindness}
              id="blindness"
              tooltipText={skillsInfo.blindness}
              iconClass="icon-img"
              buttonClass="button-player"
            />
          ) : null}
        </>
      ) : null}

      {/* Knight */}

      {heroClass == "Knight" ? (
        <ButtonPlayer
          fn={attack}
          img={skillsIcons.attack}
          id="attack"
          tooltipText={skillsInfo.attack}
          iconClass="icon-img"
          buttonClass="button-player"
        />
      ) : null}

      {heroClass == "Knight" ? (
        <ButtonPlayer
          fn={defend}
          img={skillsIcons.defend}
          id="defend"
          tooltipText={skillsInfo.defend}
          iconClass="icon-img"
          buttonClass="button-player"
        />
      ) : null}

      {heroClass == "Knight" ? (
        <ButtonPlayer
          fn={castFrenzy}
          img={skillsIcons.frenzy}
          id="frenzy"
          tooltipText={skillsInfo.frenzy}
          iconClass="icon-img"
          buttonClass="button-player"
        />
      ) : null}

      {heroClass == "Knight" ? (
        <ButtonPlayer
          fn={drinkPotion}
          img={skillsIcons.potion}
          id="drinkPotion"
          tooltipText={skillsInfo.drinkPotion}
          iconClass="icon-img"
          buttonClass="button-player"
        />
      ) : null}
    </>
  );
};

export default SkillsTemplate;
