export const calculateDamage = (
  attackerDamage,
  receiverDefense,
  criticalChance
) => {
  let damage = attackerDamage * (1 - receiverDefense / 100);
  let rollCritical = Math.floor(Math.random() * 101);
  if (rollCritical < criticalChance) {
    return (damage *= 2);
  } else {
    return (damage = damage);
  }
};
