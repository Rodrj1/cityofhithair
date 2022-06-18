export const blindness = (
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
    console.log(target);
    const CASTER_MAGIC = caster.magic;
    const CASTER_CHANGE_ATTRIBUTES = setCasterAttributes;
    const CASTER_UPDATE_STATE = casterState;
    const CASTER_POWER = caster.darkMastery;

    const TARGET_NAME = target.name;
    const TARGET_CHANGE_ATTRIBUTES = setTargetAttributes;
    const TARGET_UPDATE_STATE = targetState;

    // * Set spell

    const SPELL_POWER = parseInt(0.5 * CASTER_POWER);
    const MAGIC_COST = 2;
    const MAGIC_CHECK = CASTER_MAGIC - MAGIC_COST;

    // * Helpers

    const UPDATE_MESSAGE = setMessage;
    const TIMER = waitTimer;
    const TEXT = `\n${TARGET_NAME}'s is blind for - ${parseFloat(
      SPELL_POWER
    ).toFixed(1)}.`;

    // * Spell starts

    if (MAGIC_CHECK >= 0) {
      (async () => {
        await TIMER(1000);

        UPDATE_MESSAGE((prev) => [...prev, TEXT]);

        CASTER_CHANGE_ATTRIBUTES((prevState) => ({
          ...prevState,
          magic: prevState.magic - MAGIC_COST,
        }));
        TARGET_CHANGE_ATTRIBUTES((prevState) => ({
          ...prevState,
          blind: prevState.blind + SPELL_POWER,
        }));

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

export const updateBlindStatus = (status, setStatus) => {
  const BLIND_STATUS = status.blind;
  const BLIND_UPDATE_STATUS = setStatus;

  if (BLIND_STATUS > 0) {
    BLIND_UPDATE_STATUS((prevState) => ({
      ...prevState,
      blind: prevState.blind - 1,
    }));
  }
};
