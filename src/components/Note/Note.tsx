import { useDialogStore } from '../../stores';
import style from '../../styles/Note.module.scss';

const Note = () => {
  const note = useDialogStore((state) => state.note);
  const { updateNoteStatus } = useDialogStore();

  return (
    <div className={style.container}>
      <div>
        <h2>{note.name}</h2>

        <p>{note.text}</p>
      </div>

      <button onClick={updateNoteStatus}>Close</button>
    </div>
  );
};

export default Note;
