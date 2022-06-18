export const castDefend = (
  defenseCaster,
  setCasterDefense,
  waitTimer,
  setMessage,
  casterState,
  enemyState,
  setAnimation
) =>
  new Promise((resolve) => {
    const CASTER_NAME = defenseCaster.name;
    const CASTER_CHANGE_ATTRIBUTES = setCasterDefense;
    const CASTER_MAGIC = defenseCaster.magic;
    const CASTER_UPDATE_STATE = casterState;

    const ENEMY_UPDATE_STATE = enemyState;

    // * Set spell

    const SPELL_POWER = 20;
    const MAGIC_COST = 1;
    const MAGIC_CHECK = CASTER_MAGIC - MAGIC_COST;

    // * Helpers

    const UPDATE_MESSAGE = setMessage;
    const TIMER = waitTimer;
    const TEXT = `\n${CASTER_NAME}'s defense increases in + ${parseFloat(
      SPELL_POWER
    ).toFixed(1)}.`;

    // * Defend starts

    (async () => {
      if (MAGIC_CHECK >= 0) {
        await TIMER(1000);

        UPDATE_MESSAGE((prev) => [...prev, TEXT]);

        CASTER_CHANGE_ATTRIBUTES((prevState) => ({
          ...prevState,
          defense: prevState.defense + SPELL_POWER,
          magic: prevState.magic - 1,
          defendArmor: prevState.defendArmor + SPELL_POWER,
          defenseStatus: prevState.defenseStatus + 3,
        }));

        await TIMER(1000);

        resolve(
          CASTER_UPDATE_STATE(0),
          ENEMY_UPDATE_STATE(1),
          setAnimation("")
        );
      } else {
        resolve(
          UPDATE_MESSAGE((prev) => [...prev, `\nDefend is on cooldown.`]),
          setAnimation("")
        );
      }
    })();
  });

export const updateDefenseStatus = (status, setStatus) => {
  const DEFENSE_STATUS = status.defenseStatus;
  const UPDATE_TARGET_STATUS = setStatus;

  if (DEFENSE_STATUS > 0) {
    UPDATE_TARGET_STATUS((prevState) => ({
      ...prevState,
      defenseStatus: prevState.defenseStatus - 1,
    }));
  }
  if (DEFENSE_STATUS == 1) {
    UPDATE_TARGET_STATUS((prevState) => ({
      ...prevState,
      defense: prevState.defense - prevState.defendArmor,
      defendArmor: 0,
    }));
  }
};
