const AttributesTemplate = ({
  attack,
  defense,
  potions,
  darkMastery,
  criticalChance,
}) => {
  return (
    <>
      <p>Attack: {parseFloat(attack).toFixed(1)}</p>
      <p>Defense: {parseFloat(defense).toFixed(1)}</p>
      {potions ? <p>Potions: {potions}</p> : null}
      {darkMastery ? <p>Dark Magic Mastery: {darkMastery}</p> : null}
      {criticalChance ? <p>Critical Chance: {criticalChance}%</p> : null}
    </>
  );
};

export default AttributesTemplate;
