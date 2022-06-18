import { useUISounds } from "../../helpers/hooks/useUISounds";

const Npc = ({
  setInDialog,
  setDialogName,
  setDialogPortrait,
  setDialogText,
  setDialogOptions,
  dialogOptions,
  name,
  portrait,
  face,
}) => {
  const isTalking = () => {
    setInDialog(true);
    setDialogName(name);
    setDialogPortrait(portrait);
    setDialogOptions(dialogOptions);
    setDialogText("");
  };

  const { playHover } = useUISounds();

  return (
    <div className="npc">
      <div>
        <p>{name}</p>
      </div>
      <img src={face} onClick={isTalking} onMouseOver={playHover} alt={name} />
    </div>
  );
};

export default Npc;
