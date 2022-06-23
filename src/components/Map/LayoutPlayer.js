import Notes from "../MiscComponents/Notes";
import ButtonPlayer from "../MiscComponents/ButtonPlayer";
import itemsIcons from "../../data/iconItems";

const LayoutPlayer = ({
  heroName,
  heroPortrait,
  player,
  gold,
  inventory,
  inNote,
  setInNote,
  noteName,
  noteText,
}) => {

  const getInventory = inventory
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((item, index) => (
      <ButtonPlayer
        key={index}
        id={item.id}
        iconClass="icon-item-img"
        buttonClass="button-item"
        tooltipText={item.tooltipText}
        img={item.img}
        fn={item.fn}
      />
    ));

  const dialogLeave = () => {
    setInNote(false);
  };

  return (
    <>
      {inNote ? (
        <Notes
          noteName={noteName}
          noteText={noteText}
          dialogLeave={dialogLeave}
        />
      ) : null}
      <div>
        <h4>{heroName}</h4>
        <img src={heroPortrait} className="portrait-img" alt={heroName} />
      </div>
      <div className="layout-player-stats">
        <div>
          <span>
            <img
              src={itemsIcons.playergold}
              className="stats-img"
              alt={"gold"}
            />
            <p>{gold}</p>
          </span>

          <span>
            <img src={itemsIcons.attack} className="stats-img" alt={"damage"} />
            <p>{player.attack}</p>
          </span>

          <span>
            <img src={itemsIcons.defense} className="stats-img" alt={"armor"} />
            <p>{player.defense}</p>
          </span>
          
          {player.darkMastery ? (
            <span>
              <img
                src={itemsIcons.darktome}
                className="stats-img"
                alt={"darkmagic"}
              />
              <p>{player.darkMastery}</p>
            </span>
          ) : null}
        </div>

        <div className="inventory">{getInventory}</div>
      </div>
    </>
  );
};

export default LayoutPlayer;
