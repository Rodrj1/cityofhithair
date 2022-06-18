import { useState, useEffect } from "react";
// * Import Custom Hooks
import { useGetPlayerActions } from "../../helpers/hooks/useGetPlayerActions";
import { useAnnouncer } from "../../helpers/hooks/useAnnouncer";
// * Import Functions
import { getBoardAction } from "./BoardActions";
import { calculateDamage } from "../../helpers/functions/damagefunction";
import { waitTimer } from "../../helpers/functions/waitTimer";
// * Import Components
import BoardEnemy from "./BoardEnemy";
import BoardMessages from "./BoardMessages";
import BoardPlayer from "./BoardPlayer";
import Announcer from "../MiscComponents/Announcer";

const Board = ({ enemyBoard, playerBoard, setFight, buyBlindness }) => {
  const {
    playerAction,
    setPlayerAction,
    setAnimation,
    setPlayerActionState,
    attack,
    defend,
    drinkPotion,
    drainAttack,
    castWeakness,
    castVulnerability,
    castDrainLife,
    castBlindness,
    castFrenzy,
  } = useGetPlayerActions();

  const [messageText, setMessageText] = useState("Fight Starts.");

  // * Set Announcer

  const [announcerText, setAnnouncerText] = useState("");
  const [announcerAttackerImg, setAnnouncerAttackerImg] = useState(null);
  const [announcerReceiverImg, setAnnouncerReceiverImg] = useState(null);
  const [announcerSkillIcon, setAnnouncerSkillIcon] = useState(null);
  const { showAnnouncer, hideAnnouncer } = useAnnouncer();

  const [enemyActionState, setEnemyActionState] = useState(0);
  const [enemy, setEnemy] = useState({
    ...enemyBoard,
    defaultAttack: enemyBoard.attack,
    removedAttack: 0,
    removedDefense: 0,
    vulnerabilityStatus: 0,
    weaknessStatus: 0,
    blind: 0,
  });
  const [player, setPlayer] = useState({
    ...playerBoard,
    defaultDefense: playerBoard.defense,
    defaultAttack: playerBoard.attack,
    defendArmor: 0,
  });

  const getPlayerAction = () => {
    setPlayerAction("");
    getBoardAction(
      setFight,
      // * Board Actions
      playerAction,
      setPlayerActionState,
      setEnemyActionState,
      // * Board Players
      player,
      setPlayer,
      enemy,
      setEnemy,
      // * Board Functions
      setMessageText,
      setAnimation,
      calculateDamage,
      waitTimer,
      // * Board Announcer
      showAnnouncer,
      setAnnouncerText,
      setAnnouncerAttackerImg,
      setAnnouncerReceiverImg,
      setAnnouncerSkillIcon
    );
  };

  const getEnemyAction = () => {
    if (enemyActionState === 1) {
      let enemyAction = "";
      if (enemy.blind == 0) {
        if (enemy.magic > 0) {
          let random = parseInt(Math.random() * enemy.skills.length);
          enemyAction = `${enemy.skills[random].name}`;
        } else {
          enemyAction = "attack";
        }
      } else {
        enemyAction = "blind";
      }
      getBoardAction(
        setFight,
        // * Board Actions
        enemyAction,
        setEnemyActionState,
        setPlayerActionState,
        // * Board Players
        enemy,
        setEnemy,
        player,
        setPlayer,
        // * Board Functions
        setMessageText,
        setAnimation,
        calculateDamage,
        waitTimer,
        // * Board Announcer
        showAnnouncer,
        setAnnouncerText,
        setAnnouncerAttackerImg,
        setAnnouncerReceiverImg,
        setAnnouncerSkillIcon
      );
    }
  };

  // * Player actions

  useEffect(() => {
    window.addEventListener("getAction", getPlayerAction());

    if (enemyActionState === 1) {
      return () => {
        window.removeEventListener("getAction", getPlayerAction());
      };
    }
  }, [playerAction]);

  // * PC actions

  useEffect(() => {
    window.addEventListener("getAction", getEnemyAction());

    if (enemyActionState === 0) {
      return () => {
        window.removeEventListener("getAction", getEnemyAction());
      };
    }
  }, [enemyActionState]);

  return (
    <>
      <div className="grid-board-t">
        <BoardPlayer
          player={player}
          attack={attack}
          defend={defend}
          castFrenzy={castFrenzy}
          drinkPotion={drinkPotion}
          drainAttack={drainAttack}
          castWeakness={castWeakness}
          castVulnerability={castVulnerability}
          castDrainLife={castDrainLife}
          castBlindness={castBlindness}
          buyBlindness={buyBlindness}
        />

        <BoardEnemy id={enemy.id} enemyAttributes={enemy} />

        <BoardMessages messageText={messageText} />
      </div>

      {!hideAnnouncer ? (
        <Announcer
          text={announcerText}
          attackerImg={announcerAttackerImg}
          receiverImg={announcerReceiverImg}
          skillIcon={announcerSkillIcon}
        />
      ) : null}
    </>
  );
};

export default Board;
