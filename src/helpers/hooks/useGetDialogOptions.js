import {
  dialogMarion,
  dialogMerchant,
  dialogKnight,
} from "../../data/dataTexts";
import { useState } from "react";
import ButtonDialog from "../../components/MiscComponents/ButtonDialog";

export const useGetDialogOptions = () => {
  const [dialogText, setDialogText] = useState("");

  // * Marion

  const dialogHithair = () => {
    setDialogText(dialogMarion.hithair);
  };
  const dialogEvil = () => {
    setDialogText(dialogMarion.evil);
  };
  const dialogTamoe = () => {
    setDialogText(dialogMarion.tamoe);
  };
  const dialogDungeons = () => {
    setDialogText(dialogMarion.dungeons);
  };
  const dialogWanderer = () => {
    setDialogText(dialogMarion.wanderer);
  };
  const dialogDarkKnights = () => {
    setDialogText(dialogMarion.darkknights);
  };
  const dialogThinmel = () => {
    setDialogText(dialogMarion.thinmel);
  };

  const marionOptions = [
    { fn: dialogHithair, text: "Hithair" },
    { fn: dialogEvil, text: "Ancient Evil" },
    { fn: dialogTamoe, text: "Tamoé" },
    { fn: dialogDungeons, text: "Dungeons" },
    { fn: dialogWanderer, text: "Wanderer" },
    { fn: dialogDarkKnights, text: "Dark Knights" },
    { fn: dialogThinmel, text: "Thinmel" },
  ];

  // * Merchant

  const dialogItems = () => {
    setDialogText(dialogMerchant.items);
  };

  const dialogMoney = () => {
    setDialogText(dialogMerchant.money);
  };

  const merchantOptions = [
    { fn: dialogItems, text: "Items" },
    { fn: dialogMoney, text: "Money" },
  ];

  // * Knight

  const dialogDungeonsKnight = () => {
    setDialogText(dialogKnight.dungeons);
  };

  const dialogCannibal = () => {
    setDialogText(dialogKnight.cannibal);
  };

  const knightOptions = [
    { fn: dialogDungeonsKnight, text: "Dungeons" },
    { fn: dialogCannibal, text: "The Cannibal" },
  ];

  const marion = marionOptions.map((el, index) => (
    <ButtonDialog
      fn={el.fn}
      text={el.text}
      key={index}
      buttonClass="dialog-button"
    />
  ));

  const merchant = merchantOptions.map((el, index) => (
    <ButtonDialog
      fn={el.fn}
      text={el.text}
      key={index}
      buttonClass="dialog-button"
    />
  ));

  const knight = knightOptions.map((el, index) => (
    <ButtonDialog
      fn={el.fn}
      text={el.text}
      key={index}
      buttonClass="dialog-button"
    />
  ));

  return {
    merchant,
    marion,
    knight,
    dialogText,
    setDialogText,
  };
};
