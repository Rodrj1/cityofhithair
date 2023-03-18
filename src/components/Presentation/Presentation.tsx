import { useState } from 'react';
import { useTransition, animated, useSpring } from '@react-spring/web';

const presentationText =
  "The townfolk of Hithair requested help to the city of Kimvaema in the west. After a few denials, they came to us. They claim an ancient evil has been unleashed again, that its awakening made the bestial dark knights more agressive, but it couldn't be further from the truth. Ignore them. Since their great hero Tamoé fell, they became deranged and fearful. This evil will never go out, but your target will.\n\nA man named Nicolai entered Hithair in search of something he concealed to himself, he was seen here in Balfiera also. After a while, the defenders in the mausoleum were swarmed by hordes of skeletons and dark knights led by an entity called The Cannibal. Of Nicolai nothing else is heard yet, but the survivors tell of a 'hole' in the mausoleum that leads to forgotten dungeons. Somehow, Nicolai passed unseen and opened this dark passage that was known only to him. This is his work, not of an ancient evil. You must get information of this man at all costs. We fear he might come one day to Balfiera. Confrontation is not needed. You must survive and get clues of the man's wherabouts. Hithair is not a priority.";

interface Props {
  setPresentation: React.Dispatch<React.SetStateAction<boolean>>;
}

const Presentation = ({ setPresentation }: Props) => {
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
      setPresentation((show) => !show);
    }, 1500);
  };

  return (
    <>
      {transition(
        (style, item) =>
          item && (
            <animated.div style={style} className="blackDisplay">
              <animated.div style={animationProps} className="content">
                <p>{presentationText}</p>
                {visible && <button onClick={closePresentation}>Close</button>}
              </animated.div>
            </animated.div>
          )
      )}
    </>
  );
};

export default Presentation;
