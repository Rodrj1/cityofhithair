export const castFrenzy = (
  caster,
  setCasterAttributes,
  waitTimer,
  setMessage,
  casterState,
  enemyState,
  setAnimation
) =>
  new Promise((resolve) => {
    const CASTER_ATTACK = caster.attack;
    const CASTER_NAME = caster.name;
    const CASTER_MAGIC = caster.magic;
    const CASTER_CHANGE_ATTRIBUTES = setCasterAttributes;
    const CASTER_UPDATE_STATE = casterState;

    const ENEMY_UPDATE_STATE = enemyState;

    // * Set spell

    const SPELL_POWER = 4 + CASTER_ATTACK / 2;
    const MAGIC_COST = 1;
    const MAGIC_CHECK = CASTER_MAGIC - MAGIC_COST;

    // * Helpers

    const UPDATE_MESSAGE = setMessage;
    const TIMER = waitTimer;
    const TEXT = `\n${CASTER_NAME}'s attack has been increased in +${parseFloat(
      SPELL_POWER
    ).toFixed(1)}.`;

    (async () => {
      if (MAGIC_CHECK >= 0) {
        await TIMER(1000);

        UPDATE_MESSAGE((prev) => [...prev, TEXT]);

        CASTER_CHANGE_ATTRIBUTES((prevState) => ({
          ...prevState,
          attack: prevState.attack + SPELL_POWER,
          magic: prevState.magic - 1,
          frenzyAttack: prevState.frenzyAttack + SPELL_POWER,
          frenzyStatus: prevState.frenzyStatus + 3,
        }));

        await TIMER(1000);

        resolve(
          CASTER_UPDATE_STATE(0),
          ENEMY_UPDATE_STATE(1),
          setAnimation("")
        );
      } else {
        resolve(
          UPDATE_MESSAGE((prev) => [...prev, `\nOut of Magic.`]),
          setAnimation("")
        );
      }
    })();
  });

export const updateFrenzyStatus = (status, setStatus) => {
  const FRENZY_STATUS = status.frenzyStatus;
  const UPDATE_TARGET_STATUS = setStatus;

  if (FRENZY_STATUS > 0) {
    UPDATE_TARGET_STATUS((prevState) => ({
      ...prevState,
      frenzyStatus: prevState.frenzyStatus - 1,
    }));
  }
  if (FRENZY_STATUS == 1) {
    UPDATE_TARGET_STATUS((prevState) => ({
      ...prevState,
      attack: prevState.attack - prevState.frenzyAttack,
      frenzyAttack: 0,
    }));
  }
};
