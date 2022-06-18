import { useTransition, animated } from "react-spring";
const MapEnd = ({ visible }) => {
  const transition = useTransition(visible, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 1, config: { duration: 1500 } },
  });

  const presentationText = "Game Over.\n\nYour body has been trapped.";

  return (
    <>
      {transition((style, item) =>
        item ? (
          <animated.div style={style} className="map-presentation">
            <p style={{fontSize: "25px"}}>{presentationText}</p>
          </animated.div>
        ) : null
      )}
    </>
  );
};

export default MapEnd;
