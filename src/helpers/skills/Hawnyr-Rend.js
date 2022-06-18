export const rendEnemy = (
  caster,
  target,
  setTargetAttributes,
  setMessage,
  damageFunction,
  waitTimer,
  casterState,
  targetState,
  setAnimation,
  setFightStatus
) =>
  new Promise((resolve) => {
    const CASTER_NAME = caster.name;
    const CASTER_DAMAGE = caster.attack + 7;
    const CASTER_MAGIC = caster.magic;
    const CASTER_CRITICAL_CHANCE = caster.criticalChance;
    const CASTER_UPDATE_STATE = casterState;

    // * Set Target

    const TARGET_NAME = target.name;
    const TARGET_DEFENSE = target.defense;
    const TARGET_HEALTH = target.health;
    const TARGET_CHANGE_ATTRIBUTES = setTargetAttributes;
    const TARGET_UPDATE_STATE = targetState;

    // * Set spell

    const MAGIC_COST = 1;
    const MAGIC_CHECK = CASTER_MAGIC - MAGIC_COST;
    const DAMAGE_DEALT = damageFunction(
      CASTER_DAMAGE,
      TARGET_DEFENSE,
      CASTER_CRITICAL_CHANCE
    );

    // * Helpers

    const CHANGE_FIGHT_STATUS = setFightStatus;
    const UPDATE_MESSAGE = setMessage;
    const TIMER = waitTimer;
    const TEXT = `\n${CASTER_NAME} rends ${TARGET_NAME} dealing ${parseFloat(
      DAMAGE_DEALT
    ).toFixed(1)} damage.`;

    if (MAGIC_CHECK >= 0) {
      (async () => {
        if (TARGET_HEALTH - DAMAGE_DEALT <= 0) {
          resolve(CHANGE_FIGHT_STATUS((current) => !current));
        } else {
          await TIMER(1000);

          UPDATE_MESSAGE((prev) => [...prev, TEXT]);

          TARGET_CHANGE_ATTRIBUTES((prevState) => ({
            ...prevState,
            health: prevState.health - DAMAGE_DEALT,
          }));

          await TIMER(1000);

          resolve(
            CASTER_UPDATE_STATE(0),
            TARGET_UPDATE_STATE(1),
            UPDATE_MESSAGE((prev) => [...prev, `\n${TARGET_NAME}'s turn.`]),
            setAnimation("")
          );
        }
      })();
    } else {
      resolve(
        UPDATE_MESSAGE((prev) => [...prev, `\nOut of magic.`]),
        setAnimation("")
      );
    }
  });
