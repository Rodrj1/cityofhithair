import { useTransition, animated } from '@react-spring/web';

interface Props {
  visible: boolean;
}

const Victory = ({ visible }: Props) => {
  const transition = useTransition(visible, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 1, config: { duration: 1500 } },
  });

  const gameOverText = 'Game Over.\n\nYour body has been trapped.';

  return (
    <>
      {transition(
        (style, item) =>
          item && (
            <animated.div style={style} className="blackDisplay">
              <p>{gameOverText}</p>
            </animated.div>
          )
      )}
    </>
  );
};

export default Victory;
