export const weakness = (
  caster,
  target,
  setTargetAttributes,
  setCasterAttributes,
  waitTimer,
  setMessage,
  casterState,
  targetState,
  setAnimation
) =>
  new Promise((resolve) => {
    const CASTER_MAGIC = caster.magic;
    const CASTER_CHANGE_ATTRIBUTES = setCasterAttributes;
    const CASTER_UPDATE_STATE = casterState;
    const CASTER_POWER = caster.darkMastery;

    const TARGET_NAME = target.name;
    const TARGET_ATTACK = target.defaultAttack;
    const TARGET_CHANGE_ATTRIBUTES = setTargetAttributes;
    const TARGET_UPDATE_STATE = targetState;

    // * Set spell

    const SPELL_POWER = 0.7 - 0.1 * CASTER_POWER;
    const SPELL_DURATION = 1 * CASTER_POWER;
    const MAGIC_COST = 1;
    const MAGIC_CHECK = CASTER_MAGIC - MAGIC_COST;
    const ATTACK_REDUCTION = TARGET_ATTACK * SPELL_POWER;
    const REMOVED_ATTACK = TARGET_ATTACK - TARGET_ATTACK * SPELL_POWER;

    // * Helpers

    const UPDATE_MESSAGE = setMessage;
    const TIMER = waitTimer;
    const TEXT = `\n${TARGET_NAME}'s attack has been reduced in - ${parseFloat(
      ATTACK_REDUCTION
    ).toFixed(1)}.`;

    // * Spell starts

    if (MAGIC_CHECK >= 0) {
      (async () => {
        await TIMER(1000);

        UPDATE_MESSAGE((prev) => [...prev, TEXT]);

        if (REMOVED_ATTACK <= 0) {
          CASTER_CHANGE_ATTRIBUTES((prevState) => ({
            ...prevState,
            magic: prevState.magic - MAGIC_COST,
          }));
          TARGET_CHANGE_ATTRIBUTES((prevState) => ({
            ...prevState,
            attack: prevState.attack / prevState.attack,
            weaknessStatus: prevState.weaknessStatus + SPELL_DURATION,
          }));
        } else {
          CASTER_CHANGE_ATTRIBUTES((prevState) => ({
            ...prevState,
            magic: prevState.magic - MAGIC_COST,
          }));
          TARGET_CHANGE_ATTRIBUTES((prevState) => ({
            ...prevState,
            attack: prevState.attack - ATTACK_REDUCTION,
            removedAttack: prevState.removedAttack + REMOVED_ATTACK,
            weaknessStatus: prevState.weaknessStatus + SPELL_DURATION,
          }));
        }

        await TIMER(1000);

        resolve(
          UPDATE_MESSAGE((prev) => [...prev, `\n${TARGET_NAME}'s turn.`]),
          CASTER_UPDATE_STATE(0),
          TARGET_UPDATE_STATE(1),
          setAnimation("")
        );
      })();
    } else {
      resolve(
        UPDATE_MESSAGE((prev) => [...prev, `\nOut of magic.`]),
        setAnimation("")
      );
    }
  });

export const updateWeaknessStatus = (status, setStatus) => {
  const WEAKNESS_STATUS = status.weaknessStatus;
  const WEAKNESS_UPDATE_STATUS = setStatus;

  if (WEAKNESS_STATUS > 0) {
    WEAKNESS_UPDATE_STATUS((prevState) => ({
      ...prevState,
      weaknessStatus: prevState.weaknessStatus - 1,
    }));
  }
  if (WEAKNESS_STATUS == 1) {
    WEAKNESS_UPDATE_STATUS((prevState) => ({
      ...prevState,
      attack: prevState.attack + prevState.removedAttack,
      removedAttack: 0,
    }));
  }
};
