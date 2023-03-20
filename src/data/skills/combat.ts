import { skillsIcons } from './icons';

export const attack = {
  name: 'Attack',
  description: 'Basic attack.',
  image: skillsIcons.attack,
  cost: 0,
};

export const defend = {
  name: 'Defend',
  description:
    'Adds an aditional point in defense. Each point in defense decreases damage by 10%. Consumes the turn.',
  image: skillsIcons.defend,
  cost: 2,
};

export const frenzy = {
  name: 'Frenzy',
  description:
    'Strong buff that enhances your damage by seven but reduces your defenses by two points. Consumes the turn.',
  image: skillsIcons.frenzy,
  cost: 2,
};

export const sacrifice = {
  name: 'Sacrifice',
  description:
    "Performs a risky attack that destroys the oponent's armor permanently leaving it flanked, but at the cost of 11 health.",
  image: skillsIcons.sacrifice,
  cost: 2,
};

export const drinkLifePotion = {
  name: 'Potion Of Life',
  description: 'Heals by 10. Does not consumes the turn.',
  image: skillsIcons.healthPotion,
  cost: 0,
};

export const drinkManaPotion = {
  name: 'Potion Of Magic',
  description:
    'Restores 3 points of spiritual power. Does not consumes the turn.',
  image: skillsIcons.manaPotion,
  cost: 0,
};
