import ButtonDialog from "./ButtonDialog";

const AnnouncerItems = ({ text, setHideAnnouncer }) => {
  const leaveAnnouncer = () => {
    setHideAnnouncer((current) => !current);
  };

  return (
    <div className="announcer-loot">
      <p style={{ fontSize: "25px", textAlign: "center" }}>{text}</p>

      <ButtonDialog
        text="Close"
        fn={leaveAnnouncer}
        buttonClass="dialog-button"
      />
    </div>
  );
};

export default AnnouncerItems;
