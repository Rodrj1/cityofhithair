import ReactTooltip from "react-tooltip";

const ButtonPlayer = ({ fn, img, id, tooltipText, iconClass, buttonClass }) => {
  return (
    <>
      <button onClick={fn} data-tip data-for={id} className={buttonClass}>
        <img src={img} className={iconClass} alt={id} />
      </button>
      <ReactTooltip
        id={id}
        effect="solid"
        border={true}
        backgroundColor="black"
        borderColor="hsl(35, 17%, 44%)"
        arrowColor="red"
      >
        <span className="tooltipSpan">{tooltipText}</span>
      </ReactTooltip>
    </>
  );
};

export default ButtonPlayer;
