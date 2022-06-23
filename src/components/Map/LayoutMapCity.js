import Npc from "../MiscComponents/NPC";
import Dialog from "../MiscComponents/Dialog";
import npcPortraits from "../../data/portraitsNPCs";
import { useGetDialogOptions } from "../../helpers/hooks/useGetDialogOptions";
import { useState } from "react";

const LayoutMapCity = ({
  gold,
  setGold,
  player,
  setPlayer,
  setHideAnnouncer,
  setTextAnnouncer,
  setBuyBlindness,
}) => {
  const [inDialog, setInDialog] = useState(false);
  const [dialogName, setDialogName] = useState("");
  const [dialogPortrait, setDialogPortrait] = useState(null);
  const [dialogOptions, setDialogOptions] = useState([]);
  const { marion, merchant, knight, dialogText, setDialogText } =
    useGetDialogOptions();

  return (
    <div className="map-city">
      <Npc
        setInDialog={setInDialog}
        setDialogName={setDialogName}
        setDialogPortrait={setDialogPortrait}
        setDialogText={setDialogText}
        setDialogOptions={setDialogOptions}
        dialogOptions={marion}
        name={"Marion"}
        portrait={npcPortraits.marion}
        face={npcPortraits.marionface}
      />
      <Npc
        setInDialog={setInDialog}
        setDialogName={setDialogName}
        setDialogPortrait={setDialogPortrait}
        setDialogText={setDialogText}
        setDialogOptions={setDialogOptions}
        dialogOptions={merchant}
        name={"Merchant"}
        portrait={npcPortraits.merchant}
        face={npcPortraits.merchantface}
      />
      <Npc
        setInDialog={setInDialog}
        setDialogName={setDialogName}
        setDialogPortrait={setDialogPortrait}
        setDialogText={setDialogText}
        setDialogOptions={setDialogOptions}
        dialogOptions={knight}
        name={"Knight"}
        portrait={npcPortraits.knight}
        face={npcPortraits.knightface}
      />
      <div className="city-dialog">
        {inDialog ? (
          <Dialog
            dialogName={dialogName}
            dialogPortrait={dialogPortrait}
            dialogOptions={dialogOptions}
            dialogText={dialogText}
            setDialogText={setDialogText}
            setInDialog={setInDialog}
            gold={gold}
            setGold={setGold}
            player={player}
            setPlayer={setPlayer}
            setHideAnnouncer={setHideAnnouncer}
            setTextAnnouncer={setTextAnnouncer}
            setBuyBlindness={setBuyBlindness}
          />
        ) : null}
      </div>
    </div>
  );
};

export default LayoutMapCity;
