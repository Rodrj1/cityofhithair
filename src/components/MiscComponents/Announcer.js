const Announcer = ({ text, attackerImg, receiverImg, skillIcon }) => {

  return (
    <div className="announcer">
      {attackerImg ? (
        <img src={attackerImg} className="announcer-img" alt={"Attacker"} />
      ) : null}
      <p style={{ fontSize: "20px" }}>{text}</p>
      {skillIcon ? (
        <img src={skillIcon} className="announcer-img" alt={"Spell Casted"} />
      ) : null}
      {receiverImg ? (
        <img src={receiverImg} className="announcer-img" alt={"Receiver"} />
      ) : null}
    </div>
  );
};

export default Announcer;
