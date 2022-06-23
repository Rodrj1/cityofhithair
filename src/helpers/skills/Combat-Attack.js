export const attackEnemy = (
  caster,
  target,
  setTargetAttributes,
  setMessage,
  damageFunction,
  waitTimer,
  casterState,
  targetState,
  setAnimation,
  setFightStatus,
  setIsPlayerAlive
) =>
  new Promise((resolve) => {
    const CASTER_NAME = caster.name;
    const CASTER_DAMAGE = caster.attack;
    const CASTER_CRITICAL_CHANCE = caster.criticalChance;
    const CASTER_UPDATE_STATE = casterState;

    // * Set Target

    const TARGET_NAME = target.name;
    const TARGET_DEFENSE = target.defense;
    const TARGET_HEALTH = target.health;
    const TARGET_CHANGE_ATTRIBUTES = setTargetAttributes;
    const TARGET_UPDATE_STATE = targetState;

    // * Set damage

    const DAMAGE_DEALT = damageFunction(
      CASTER_DAMAGE,
      TARGET_DEFENSE,
      CASTER_CRITICAL_CHANCE
    );
    const IS_PLAYER = target.player;

    // * Helpers

    const CHANGE_FIGHT_STATUS = setFightStatus;
    const CHANGE_PLAYER_STATUS = setIsPlayerAlive;
    const UPDATE_MESSAGE = setMessage;
    const TIMER = waitTimer;
    const TEXT = `\n${CASTER_NAME} attacks ${TARGET_NAME} dealing ${parseFloat(
      DAMAGE_DEALT
    ).toFixed(1)} damage.`;

    (async () => {
      await TIMER(1000);

      UPDATE_MESSAGE((prev) => [...prev, TEXT]);

      if (TARGET_HEALTH - DAMAGE_DEALT <= 0) {
        if (IS_PLAYER !== undefined) {
          resolve(
            CHANGE_PLAYER_STATUS((current) => !current),
            CHANGE_FIGHT_STATUS((current) => !current)
          );
        } else {
          resolve(CHANGE_FIGHT_STATUS((current) => !current));
        }
      } else {
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
  });
