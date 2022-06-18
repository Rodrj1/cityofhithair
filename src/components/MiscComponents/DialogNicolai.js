import { useState } from "react";
import ButtonDialog from "./ButtonDialog";
import MapEnd from "../Map/MapEnd";
import npcPortraits from "../../data/portraitsNPCs";
import { dialogNicolai } from "../../data/dataTexts";

const DialogNicolai = ({}) => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Nicolai");
  const [visible, setVisible] = useState(false);

  const dialogWho = () => {
    setText(dialogNicolai.nicolai);
    if (name == "Nicolai") {
      setName("Modra-Urmir");
    }
  };
  const dialogWhat = () => {
    setText(dialogNicolai.nature);
  };
  const dialogOfMe = () => {
    setText(dialogNicolai.ofMe);
  };
  const dialogInTime = () => {
    setText(dialogNicolai.inTime);
  };
  const dialogJoin = () => {
    setText(dialogNicolai.join);
    setVisible(visible => !visible);
  };
  return (
    <>
      <MapEnd visible={visible} />

      <div className="dialog-nicolai">
        <div className="dialog-content">
          <h4>{name}</h4>
          <div>
            <img
              src={npcPortraits.nicolai}
              alt={"NICOLAI"}
              className="nicolai-portrait"
            />
          </div>

          <ButtonDialog
            fn={dialogWho}
            text="Who are you?"
            buttonClass="dialog-button"
          />
          <ButtonDialog
            fn={dialogWhat}
            text="What are you?"
            buttonClass="dialog-button"
          />
          <ButtonDialog
            fn={dialogOfMe}
            text="What will be of me?"
            buttonClass="dialog-button"
          />
          <ButtonDialog
            fn={dialogInTime}
            text="In time you will be defeated."
            buttonClass="dialog-button"
          />
          <ButtonDialog
            fn={dialogJoin}
            text={`Join ${name}.`}
            buttonClass="dialog-button"
          />

          <div className="dialog-box">
            <p style={{ fontSize: "22px" }}>
              {text == ""
                ? "*As you enter the room you see a gaze in the gloom. Your body does not answer.*\n\nYou are too late. I had already delivered the knowledge to my master. And he has delivered me you. You didn't think I would let those notes without any intent didn't you? You will be but a vessel when this is all over. Join me as you may, I can linger here a great while. I will break my grip on you and let you ask what you will."
                : text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DialogNicolai;
