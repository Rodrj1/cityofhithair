import { useUISounds } from "../../helpers/hooks/useUISounds";
import ButtonPlayer from "./ButtonPlayer";
import DialogTemplate from "./DialogTemplate";
import { itemsInfo } from "../../data/dataTooltips";
import skillsIcons from "../../data/iconSkills";
import itemsIcons from "../../data/iconItems";

const Dialog = ({
  dialogName,
  dialogPortrait,
  dialogOptions,
  dialogText,
  setDialogText,
  setInDialog,
  gold,
  setGold,
  player,
  setPlayer,
  setHideAnnouncer,
  setTextAnnouncer,
  setBuyBlindness
}) => {
  const dialogLeave = () => {
    setInDialog(false);
    setDialogText("");
  };

  const { playWarning } = useUISounds();

  const addDarkMastery = () => {
    if (gold >= 100) {
      if (player.darkMastery > 0) {
        setPlayer((prevState) => ({
          ...prevState,
          darkMastery: prevState.darkMastery + 1,
        }));
        setGold((current) => current - 100);
        setTextAnnouncer("+ 1 to Dark Mastery.");
        setHideAnnouncer((current) => !current);
      } else {
        setTextAnnouncer("Your character does not use Dark Magic.");
        playWarning();
      }
    } else {
      setTextAnnouncer("Insuficient Gold.");
      playWarning();
    }
  };

  const addCombatMastery = () => {
    if (gold >= 100) {
      if (!player.darkMastery) {
        setPlayer((prevState) => ({
          ...prevState,
          attack: prevState.attack + 3,
        }));
        setGold((current) => current - 100);
        setTextAnnouncer("+ 3 to Attack.");
        setHideAnnouncer((current) => !current);
      } else {
        setTextAnnouncer("Your character does not use Combat.");
        playWarning();
      }
    } else {
      setTextAnnouncer("Insuficient Gold.");
      playWarning();
    }
  };

  const addSkillBlindness = () => {
    if (gold >= 200) {
      if (player.darkMastery > 0) {
        setGold((current) => current - 200);
        setBuyBlindness(current => !current);
        setTextAnnouncer("Blindness added to spells.");
        setHideAnnouncer((current) => !current);
      } else {
        setTextAnnouncer("Your character does not use Dark Magic.");
        playWarning();
      }
    } else {
      setTextAnnouncer("Insuficient Gold.");
      playWarning();
    }
  };

  const merchantInventory = [
    <ButtonPlayer
      fn={addDarkMastery}
      key={"DarkTome"}
      id={"DarkTome"}
      iconClass="icon-item-img"
      buttonClass="button-item"
      tooltipText={itemsInfo.dmTome}
      img={itemsIcons.darktome}
    />,
    <ButtonPlayer
      fn={addCombatMastery}
      key={"CombatTactic"}
      id={"CombatTactic"}
      iconClass="icon-item-img"
      buttonClass="button-item"
      tooltipText={itemsInfo.coTactic}
      img={itemsIcons.coTactic}
    />,
    <ButtonPlayer
      fn={addSkillBlindness}
      key={"Blindness"}
      id={"Blindness"}
      iconClass="icon-item-img"
      buttonClass="button-item"
      tooltipText={itemsInfo.blindness}
      img={skillsIcons.blindness}
    />,
  ];

  return (
    <DialogTemplate
      dialogName={dialogName}
      dialogPortrait={dialogPortrait}
      dialogOptions={dialogOptions}
      dialogText={dialogText}
      merchantInventory={merchantInventory}
      dialogLeave={dialogLeave}
    />
  );
};

export default Dialog;
