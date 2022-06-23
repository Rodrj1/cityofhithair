import ButtonDialog from "./ButtonDialog";
import { useState } from "react";
import heroPortraits from "../../data/portraitsHeroes";

const SelectHeroName = ({ heroClass, player, setPlayer }) => {
  const [nameData, setNameData] = useState("");

  const getDataName = (evt) => {
    setNameData(evt.target.value);
  };

  const selectName = () => {
    if (heroClass == "knight") {
      setPlayer({
        ...player,
        name: nameData,
        health: 65,
        maxHealth: 65,
        attack: 10,
        defense: 45,
        potions: 2,
        portrait: heroPortraits.knight,
        portraitFace: heroPortraits.knightheroface,
        heroClass: "Knight",
      });
    } else if ((heroClass = "darkmage")) {
      setPlayer({
        ...player,
        name: nameData,
        health: 40,
        maxHealth: 40,
        defense: 20,
        magic: 8,
        maxMagic: 8,
        darkMastery: 2,
        portrait: heroPortraits.darkmage,
        portraitFace: heroPortraits.darkmageface,
        heroClass: "Dark Mage",
      });
    }
  };

  return (
    <div className="announcer-input">
      <h4 className="input-item">What is your name?</h4>

      <input
        className="input-item"
        type="text"
        id="getName"
        name="getName"
        onChange={getDataName}
      />

      <ButtonDialog buttonClass="input-button" text="Select" fn={selectName} />
    </div>
  );
};

export default SelectHeroName;
