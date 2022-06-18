import { useState } from "react";
import { useTransition, animated, useSpring } from "react-spring";
import ButtonDialog from "../MiscComponents/ButtonDialog";

const MapPresentation = ({ setMapPresentation }) => {
  const [visible, setVisible] = useState(true);
  const transition = useTransition(visible, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0, config: { duration: 1500 } },
  });

  const animationProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const closePresentation = () => {
    setVisible((visible) => !visible);
    setTimeout(() => {
      setMapPresentation((showPresentation) => !showPresentation);
    }, 1500);
  };

  const presentationText =
    "The townfolk of Hithair requested help to the city of Kimvaema in the west. After a few denials, they came to us. They claim an ancient evil has been unleashed but it couldn't be further from the truth. Ignore them. Since their great hero, Tamoé, fell, they became deranged. This evil will never go out, but your target will.\n\nA man named Nicolai entered Hithair in search of something he concealed to himself. After a while, the defenders in the mausoleum were swarmed by hordes of skeletons and dark knights led by an entity called The Cannibal. Of Nicolai nothing else is heard yet, but the survivors tell of a 'hole' in the mausoleum that leads to forgotten dungeons. It is believed that, somehow, Nicolai passed unseen and opened this dark passage that was known only to him. You must get information of this man at all costs. We fear he might come one day to Balfiera. Confrontation is not needed. You must survive. Hithair is not a priority.";

  return (
    <>
      {transition((style, item) =>
        item ? (
          <animated.div style={style} className="map-presentation">
            <animated.div
              style={animationProps}
              className="map-presentation-content"
            >
              <p>{presentationText}</p>
              {visible ? (
                <ButtonDialog
                  text="Close"
                  fn={closePresentation}
                  buttonClass="dialog-button"
                />
              ) : null}
            </animated.div>
          </animated.div>
        ) : null
      )}
    </>
  );
};

export default MapPresentation;
