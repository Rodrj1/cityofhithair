import ButtonDialog from "./ButtonDialog";

const Notes = ({ noteName, noteText, dialogLeave }) => {
  return (
    <div className="note">
      <div className="note-content">
        <h2>{noteName}</h2>

        <div className="note-box">
          <p style={{fontSize: "19px"}}>{noteText}</p>
        </div>

        <div>
          <ButtonDialog
            fn={dialogLeave}
            text="Leave"
            buttonClass="dialog-button"
          />
        </div>
      </div>
    </div>
  );
};

export default Notes;
