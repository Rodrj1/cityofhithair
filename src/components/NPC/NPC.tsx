import { useDialogStore } from '../../stores';
import { Dialog, DialogOption } from '../../types';
import style from '../../styles/npc.module.scss';

interface Props {
  NPC: {
    dialogOptions: Array<DialogOption>;
    name: string;
    portrait: string;
    face: string;
  };
}

const Npc = ({ NPC }: Props) => {
  const { updateDialogStatus, updateDialog } = useDialogStore();

  const startConversation = () => {
    const dialog: Dialog = {
      name: NPC.name,
      portrait: NPC.portrait,
      options: NPC.dialogOptions,
      text: '',
    };
    updateDialog(dialog);
    updateDialogStatus();
  };

  return (
    <div className={style.container}>
      <img
        src={NPC.face}
        onClick={startConversation}
        alt={NPC.name}
      />
      <h4>{NPC.name}</h4>
    </div>
  );
};

export default Npc;
