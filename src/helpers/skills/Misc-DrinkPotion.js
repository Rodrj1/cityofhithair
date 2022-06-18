export const drinkPotion = (
  caster,
  setCasterAttributes,
  waitTimer,
  setMessage,
  casterState,
  enemyState
) =>
  new Promise((resolve) => {
    const CASTER_NAME = caster.name;
    const CASTER_HEALTH = caster.health;
    const CASTER_MAX_HEALTH = caster.maxHealth;
    const CASTER_CHANGE_ATTRIBUTES = setCasterAttributes;
    const CASTER_UPDATE_STATE = casterState;

    // * Set healing

    const POTION_HEALING = 15;
    const POTION_CHECK_VALID_HEALTH =
      CASTER_HEALTH + POTION_HEALING < CASTER_MAX_HEALTH;

    // * Helpers

    const UPDATE_MESSAGE = setMessage;
    const ENEMY_UPDATE_STATE = enemyState;
    const TIMER = waitTimer;
    const TEXT = `\n${CASTER_NAME} heals ${POTION_HEALING}HP.`;

    // * Drink Potion starts

    (async () => {
      await TIMER(1000);

      UPDATE_MESSAGE((prev) => [...prev, TEXT]);

      POTION_CHECK_VALID_HEALTH
        ? CASTER_CHANGE_ATTRIBUTES((prevState) => ({
            ...prevState,
            health: prevState.health + POTION_HEALING,
            potions: prevState.potions - 1,
          }))
        : CASTER_CHANGE_ATTRIBUTES((prevState) => ({
            ...prevState,
            health: prevState.maxHealth,
            potions: prevState.potions - 1,
          }));

      await TIMER(1000);

      resolve(CASTER_UPDATE_STATE(0), ENEMY_UPDATE_STATE(1));
    })();
  });
