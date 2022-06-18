import ButtonDialog from "./ButtonDialog";
import ButtonReward from "./ButtonReward";

const AnnouncerLoot = ({ hideLoot, setHideLoot, text, loot }) => {
  const leaveAnnouncer = () => {
    setHideLoot((current) => !current);
  };

  const lootedItems = loot.map((e, index) => (
    <ButtonReward
      key={index}
      iconClass={e.iconClass}
      buttonClass={e.buttonClass}
      img={e.img}
      text={e.name}
    />
  ));
  return (
    <>
      {!hideLoot ? (
        <div className="announcer-loot">
          <p style={{ fontSize: "25px" }}>{text}</p>
          <div className="announcer-loot-flex">{lootedItems}</div>
          <ButtonDialog text="Close" fn={leaveAnnouncer} buttonClass="dialog-button" />
        </div>
      ) : null}
    </>
  );
};

export default AnnouncerLoot;
