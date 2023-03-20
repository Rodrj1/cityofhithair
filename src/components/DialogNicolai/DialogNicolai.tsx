import { npcPortraits } from '../../data/general';
import { Victory } from '../Victory';
import { Centerer } from '../Centerer';
import style from '../../styles/Dialog.module.scss';
import { useDialogNicolai } from '../../features/components/DialogNicolai';

const DialogNicolai = () => {
  const { text, name, visible, dialogJoin, dialogWho, dialogOfMe, dialogWhat } =
    useDialogNicolai();

  return (
    <>
      {visible && (
        <Centerer>
          <Victory visible={visible} />
        </Centerer>
      )}

      <div className={style.dialogNicolai}>
        <h4>{name}</h4>
        <div>
          <img
            src={npcPortraits.nicolai}
            alt={'NICOLAI'}
            className="nicolai-portrait"
          />
        </div>

        <button onClick={dialogWho}>Who are you?</button>
        <button onClick={dialogWhat}>What are you?</button>
        <button onClick={dialogOfMe}>What are you going to do to me?</button>
        <button onClick={dialogJoin}>{`Join ${name}.`}</button>

        <div className={style.dialogBox}>
          {text == '' ? (
            <p>
              <span>
                "*As you enter the room you see a gaze in the gloom. Your body
                does not answer.*
              </span>
              <br />
              <br />
              You are too late. I had already delivered the knowledge to my
              master. And he has delivered me you. You didn't think I would let
              those notes without any intent didn't you? You will be but a
              vessel when this is all over. Join me as you may, I can linger
              here a great while. I will break my grip on your throat and let
              you ask what you will but as of your body consider it forsaken."
            </p>
          ) : (
            <p>{text}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default DialogNicolai;
