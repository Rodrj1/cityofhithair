import { useState } from "react";
import { useSpring, animated } from "react-spring";
import HeroSelectionTemplate from "./MapHeroSelectionTemplate";
import SelectHeroName from "../MiscComponents/SelectHeroName";

const HeroSelection = ({ player, setPlayer }) => {
  const [heroClass, setHeroClass] = useState("");
  const [visibleInput, setVisibleInput] = useState(false);

  const animationProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const getSelected = (chosenClass) => {
    setVisibleInput((current) => !current);
    setHeroClass(chosenClass);
  };

  return (
    <animated.div style={animationProps}>
      {visibleInput ? (
        <SelectHeroName
          heroClass={heroClass}
          player={player}
          setPlayer={setPlayer}
        />
      ) : null}
      <HeroSelectionTemplate getSelected={getSelected} />
    </animated.div>
  );
};

export default HeroSelection;