export const drainLife = (
  caster,
  target,
  setCasterAttributes,
  setTargetAttributes,
  waitTimer,
  setMessage,
  casterState,
  targetState,
  setAnimation,
  setFightStatus
) =>
  new Promise((resolve) => {
    const CASTER_NAME = caster.name;
    const CASTER_HEALTH = caster.health;
    const CASTER_MAX_HEALTH = caster.maxHealth;
    const CASTER_POWER = caster.darkMastery;
    const CASTER_MAGIC = caster.magic;
    const CASTER_CHANGE_ATTRIBUTES = setCasterAttributes;
    const CASTER_UPDATE_STATE = casterState;

    const TARGET_NAME = target.name;
    const TARGET_HEALTH = target.health;
    const TARGET_CHANGE_ATTRIBUTES = setTargetAttributes;
    const TARGET_UPDATE_STATE = targetState;

    // * Set spell

    const SPELL_POWER = 10 + 2 * CASTER_POWER;
    const MAGIC_COST = 2;
    const MAGIC_CHECK = CASTER_MAGIC - MAGIC_COST;
    const CHECK_MAX_HEALTH = CASTER_HEALTH + SPELL_POWER < CASTER_MAX_HEALTH;

    // * Helpers

    const UPDATE_MESSAGE = setMessage;
    const CHANGE_FIGHT_STATUS = setFightStatus;
    const TIMER = waitTimer;
    const TEXT = `\n${CASTER_NAME} drains ${parseFloat(SPELL_POWER).toFixed(
      1
    )}HP from ${TARGET_NAME}.`;

    // * Spell starts

    if (MAGIC_CHECK >= 0) {
      (async () => {
        UPDATE_MESSAGE((prev) => [...prev, TEXT]);

        await TIMER(1000);

        if (TARGET_HEALTH - SPELL_POWER <= 0) {
          resolve(CHANGE_FIGHT_STATUS((current) => !current));
        } else {
          CHECK_MAX_HEALTH
            ? CASTER_CHANGE_ATTRIBUTES((prevState) => ({
                ...prevState,
                health: prevState.health + SPELL_POWER,
                magic: prevState.magic - MAGIC_COST,
              }))
            : CASTER_CHANGE_ATTRIBUTES((prevState) => ({
                ...prevState,
                health: prevState.maxHealth,
                magic: prevState.magic - MAGIC_COST,
              }));

          TARGET_CHANGE_ATTRIBUTES((prevState) => ({
            ...prevState,
            health: prevState.health - SPELL_POWER,
          }));
          await TIMER(1000);

          resolve(CASTER_UPDATE_STATE(0), TARGET_UPDATE_STATE(1));
        }
      })();
    } else {
      resolve(
        UPDATE_MESSAGE((prev) => [...prev, `\nOut of magic.`]),
        setAnimation("")
      );
    }
  });
