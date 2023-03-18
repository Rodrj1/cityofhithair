import { skillsIcons } from './icons';

export const attack = {
  name: 'Attack',
  description: 'Basic attack.',
  image: skillsIcons.attack,
  cost: 0,
};

export const defend = {
  name: 'Defend',
  description: 'Halvens Damage.',
  image: skillsIcons.defend,
  cost: 2,
};

export const frenzy = {
  name: 'Frenzy',
  description: 'Strong buff.',
  image: skillsIcons.frenzy,
  cost: 2,
};

export const drinkLifePotion = {
  name: 'Potion Of Life',
  description: 'Heals by 10.',
  image: skillsIcons.healthPotion,
  cost: 0,
};

export const drinkManaPotion = {
  name: 'Potion Of Magic',
  description: 'Restores 3 points of spiritual power.',
  image: skillsIcons.manaPotion,
  cost: 0,
};
