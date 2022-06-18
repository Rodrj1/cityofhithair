const BoardMessages = ({ messageText }) => {
  return (
    <div className="message-container grid-board-item">
      <h4 style={{ fontSize: "15px", whiteSpace: "pre-wrap" }}>
        {messageText}
      </h4>
    </div>
  );
};

export default BoardMessages;
