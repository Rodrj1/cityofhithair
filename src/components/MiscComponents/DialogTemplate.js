import ButtonDialog from "./ButtonDialog";

const DialogTemplate = ({
  dialogName,
  dialogPortrait,
  dialogOptions,
  dialogText,
  merchantInventory,
  dialogLeave,
}) => {
  return (
    <div className="dialog">
      <div className="dialog-content">
        <h4>{dialogName}</h4>
        <div>
          <img
            src={dialogPortrait}
            alt={dialogName}
            className="dialog-portrait"
          />
        </div>

        {dialogName == "Merchant" ? (
          <div className="inventory">{merchantInventory}</div>
        ) : null}

        {dialogOptions}

        <div className="dialog-box">
          <p>{dialogText}</p>
        </div>

        <ButtonDialog
          fn={dialogLeave}
          text="Goodbye"
          buttonClass="dialog-button"
        />
      </div>
    </div>
  );
};

export default DialogTemplate;
