// * Import Skills
import { drainLife } from "../../helpers/skills/DM-DrainLife";
import { drinkPotion } from "../../helpers/skills/Misc-DrinkPotion";
import { attackEnemy } from "../../helpers/skills/Combat-Attack";
import { drainAttack } from "../../helpers/skills/DM-DrainAttack";
import { rendEnemy } from "../../helpers/skills/Hawnyr-Rend";
import {
  castDefend,
  updateDefenseStatus,
} from "../../helpers/skills/Combat-Defend";
import {
  weakness,
  updateWeaknessStatus,
} from "../../helpers/skills/DM-Weakness";
import {
  vulnerability,
  updateVulnerabilityStatus,
} from "../../helpers/skills/DM-Vulnerability";
import {
  castFrenzy,
  updateFrenzyStatus,
} from "../../helpers/skills/Combat-Frenzy";
// * Import Skills UI
import skillsIcons from "../../data/iconSkills";
import { blindness, updateBlindStatus } from "../../helpers/skills/DM-Blindness";

export const getBoardAction = (
  setFight,
  // * Board Actions
  action,
  setCasterActionState,
  setTargetActionState,
  // * Board Players
  caster,
  setCasterAttributes,
  target,
  setTargetAttributes,
  // * Board Functions
  setMessageText,
  setAnimation,
  calculateDamage,
  waitTimer,
  // * Board Announcer
  showAnnouncer,
  setAnnouncerText,
  setAnnouncerFirstImg,
  setAnnouncerSecondImg,
  setAnnouncerSkillIcon,
  setIsPlayerAlive
) => {
  const updateAnnouncer = (skillIcon, text) => {
    setAnnouncerText(text);
    setAnnouncerFirstImg(caster.portraitFace);
    setAnnouncerSecondImg(target.portraitFace);
    setAnnouncerSkillIcon(skillIcon);
    showAnnouncer();
  };

  const updateStatus = () => {
    updateDefenseStatus(target, setTargetAttributes);
    updateWeaknessStatus(target, setTargetAttributes);
    updateVulnerabilityStatus(target, setTargetAttributes);
    updateFrenzyStatus(target, setTargetAttributes);
    updateBlindStatus(target, setTargetAttributes);
  };

  switch (action) {
    case "attack":
      setMessageText((prev) => [...prev, `\n${caster.name} attacks.`]);
      setAnimation("Animation");
      updateAnnouncer(skillsIcons.attack, `\n${caster.name} attacks.`);

      (async () => {
        await attackEnemy(
          caster,
          target,
          setTargetAttributes,
          setMessageText,
          calculateDamage,
          waitTimer,
          setCasterActionState,
          setTargetActionState,
          setAnimation,
          setFight,
          setIsPlayerAlive
        );
      })();

      updateStatus();

      break;

    case "drainAttack":
      setMessageText((prev) => [...prev, `\n${caster.name} attacks.`]);
      setAnimation("Animation");
      updateAnnouncer(skillsIcons.dmAttack, `\n${caster.name} attacks.`);

      (async () => {
        await drainAttack(
          caster,
          setCasterAttributes,
          target,
          setTargetAttributes,
          setMessageText,
          calculateDamage,
          waitTimer,
          setCasterActionState,
          setTargetActionState,
          setFight
        );
      })();

      updateStatus();

      break;

    case "defend":
      setMessageText((prev) => [...prev, `\n${caster.name} defends.`]);
      setAnimation("Animation");
      updateAnnouncer(skillsIcons.defend, `\n${caster.name} defends.`);

      (async () => {
        await castDefend(
          caster,
          setCasterAttributes,
          waitTimer,
          setMessageText,
          setCasterActionState,
          setTargetActionState,
          setAnimation
        );
      })();

      updateStatus();

      break;

    case "weakness":
      setMessageText((prev) => [...prev, `\n${caster.name} casts Weakness.`]);
      setAnimation("Animation");
      updateAnnouncer(skillsIcons.weakness, `\n${caster.name} casts Weakness.`);

      (async () => {
        await weakness(
          caster,
          target,
          setTargetAttributes,
          setCasterAttributes,
          waitTimer,
          setMessageText,
          setCasterActionState,
          setTargetActionState,
          setAnimation
        );
      })();

      updateStatus();

      break;

    case "vulnerability":
      setMessageText((prev) => [
        ...prev,
        `\n${caster.name} casts Vulnerability.`,
      ]);
      setAnimation("Animation");
      updateAnnouncer(
        skillsIcons.vulnerability,
        `\n${caster.name} casts Vulnerability.`
      );

      (async () => {
        await vulnerability(
          caster,
          target,
          setTargetAttributes,
          setCasterAttributes,
          waitTimer,
          setMessageText,
          setCasterActionState,
          setTargetActionState,
          setAnimation
        );
      })();

      updateStatus();

      break;

    case "blindness":
      setMessageText((prev) => [...prev, `\n${caster.name} casts Blindness.`]);
      setAnimation("Animation");
      updateAnnouncer(
        skillsIcons.vulnerability,
        `\n${caster.name} casts Blindness.`
      );

      (async () => {
        await blindness(
          caster,
          target,
          setTargetAttributes,
          setCasterAttributes,
          waitTimer,
          setMessageText,
          setCasterActionState,
          setTargetActionState,
          setAnimation
        );
      })();

      updateStatus();

      break;

    case "drainLife":
      setMessageText((prev) => [...prev, `\n${caster.name} casts Drain Life.`]);
      setAnimation("Animation");
      updateAnnouncer(
        skillsIcons.stealLife,
        `\n${caster.name} casts Drain Life.`
      );

      (async () => {
        await drainLife(
          caster,
          target,
          setCasterAttributes,
          setTargetAttributes,
          waitTimer,
          setMessageText,
          setCasterActionState,
          setTargetActionState,
          setAnimation,
          setFight
        );
      })();

      updateStatus();

      break;

    case "drinkPotion":
      if (caster.potions > 0) {
        setMessageText((prev) => [
          ...prev,
          `\n${caster.name} drinks a potion.`,
        ]);
        setAnimation("Animation");
        updateAnnouncer(
          skillsIcons.potion,
          `\n${caster.name} drinks a potion.`
        );

        (async () => {
          await drinkPotion(
            caster,
            setCasterAttributes,
            waitTimer,
            setMessageText,
            setCasterActionState,
            setTargetActionState
          );
        })();

        updateStatus();
      } else {
        setMessageText((prev) => [...prev, `\nOut of potions.`]);
      }
      break;

    case "frenzy":
      setMessageText((prev) => [...prev, `\n${caster.name} casts Frenzy.`]);
      setAnimation("Animation");
      updateAnnouncer(skillsIcons.frenzy, `\n${caster.name} casts Frenzy.`);

      (async () => {
        await castFrenzy(
          caster,
          setCasterAttributes,
          waitTimer,
          setMessageText,
          setCasterActionState,
          setTargetActionState,
          setAnimation
        );
      })();

      updateStatus();

      break;

    case "rend":
      setMessageText((prev) => [...prev, `\n${caster.name} casts Rend Enemy.`]);
      setAnimation("Animation");
      updateAnnouncer(skillsIcons.rend, `\n${caster.name} casts Rend Enemy.`);

      (async () => {
        await rendEnemy(
          caster,
          setCasterAttributes,
          target,
          setTargetAttributes,
          setMessageText,
          calculateDamage,
          waitTimer,
          setCasterActionState,
          setTargetActionState,
          setAnimation,
          setFight,
          setIsPlayerAlive
        );
      })();

      updateStatus();

      break;

    case "blind":
      setMessageText((prev) => [...prev, `\n${caster.name} is Blind.\n${target.name}'s turn.`]);
      setAnimation("");
      updateAnnouncer(skillsIcons.rend, `\n${caster.name} is Blind.`);
      setCasterActionState(0);
      setTargetActionState(1);
      updateStatus();

      break;

    default:
      break;
  }
};
