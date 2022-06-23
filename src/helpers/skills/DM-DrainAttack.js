export const drainAttack = (
  caster,
  setCasterAttributes,
  target,
  setTargetAttributes,
  setMessage,
  damageFunction,
  waitTimer,
  attackerState,
  targetState,
  setFightStatus
) =>
  new Promise((resolve) => {
    const CASTER_NAME = caster.name;
    const CASTER_DAMAGE = caster.attack;
    const CASTER_HEALTH = caster.health;
    const CASTER_MAX_HEALTH = caster.maxHealth;
    const CASTER_CHANGE_ATTRIBUTES = setCasterAttributes;
    const CASTER_UPDATE_STATE = attackerState;
    const CASTER_POWER = caster.darkMastery;

    const TARGET_NAME = target.name;
    const TARGET_DEFENSE = target.defense;
    const TARGET_HEALTH = target.health;
    const TARGET_CHANGE_ATTRIBUTES = setTargetAttributes;
    const TARGET_UPDATE_STATE = targetState;

    // * Set damage

    const DAMAGE_DEALT = damageFunction(CASTER_DAMAGE, TARGET_DEFENSE, 0);
    const HEALING = 1 + 0.2 * CASTER_POWER;
    const CHECK_VALID_HEALTH = CASTER_HEALTH + HEALING < CASTER_MAX_HEALTH;

    // * Helpers

    const CHANGE_FIGHT_STATUS = setFightStatus;
    const UPDATE_MESSAGE = setMessage;
    const TIMER = waitTimer;
    const TEXT = `\n${CASTER_NAME} attacks ${TARGET_NAME} dealing ${parseFloat(
      DAMAGE_DEALT
    ).toFixed(1)} damage and heals for 1 HP.`;

    // * Attack starts

    (async () => {
      await TIMER(1000);

      UPDATE_MESSAGE((prev) => [...prev, TEXT]);

      if (TARGET_HEALTH - DAMAGE_DEALT <= 0) {
        resolve(
          CHANGE_FIGHT_STATUS((current) => !current)
        );
      } else {

        CHECK_VALID_HEALTH
          ? CASTER_CHANGE_ATTRIBUTES((prevState) => ({
              ...prevState,
              health: prevState.health + HEALING,
            }))
          : CASTER_CHANGE_ATTRIBUTES((prevState) => ({
              ...prevState,
              health: prevState.maxHealth,
            }));

        TARGET_CHANGE_ATTRIBUTES((prevState) => ({
          ...prevState,
          health: prevState.health - DAMAGE_DEALT,
        }));

        await TIMER(1000);

        resolve(
          CASTER_UPDATE_STATE(0),
          TARGET_UPDATE_STATE(1),
          UPDATE_MESSAGE((prev) => [...prev, `\n${TARGET_NAME}'s turn.`])
        );
      }
    })();
  });
