const ButtonDialog = ({ fn, text, buttonClass }) => {
  return (
      <button onClick={fn} className={buttonClass} style={{fontSize:"16px"}}>
        {text}
      </button>
  );
};

export default ButtonDialog;
