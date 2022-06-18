const ButtonReward = ({ text, img, iconClass, buttonClass }) => {

  return (
    <div className="announcer-loot-item">
      <button className={buttonClass}>
        <img src={img} className={iconClass} alt={text} />
      </button>
      <p>{text}</p>
    </div>
  );
};

export default ButtonReward;
