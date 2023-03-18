import { skill } from '../../types';
import { skillsIcons } from './icons';

export const darkAttack: skill = {
  name: 'Dark Magic: Attack',
  description:
    'Basic attack that also heals by 1hp. Each point in Dark Mastery grants an aditional point.',
  image: skillsIcons.dmAttack,
  cost: 0,
};

export const weakness: skill = {
  name: 'Weakness',
  description:
    "Weakens target's damage output by 30%. Each point in Dark Mastery decreases damage by an aditional 7%.",
  image: skillsIcons.weakness,
  cost: 2,
};

export const vulnerability: skill = {
  name: 'Vulnerability',
  description:
    'Destroys 1 point of armor. Each point in Dark Mastery decreases armor by an aditional point',
  image: skillsIcons.vulnerability,
  cost: 2,
};

export const drainLife: skill = {
  name: 'Drain Life',
  description:
    'Steals 10hp from the target. Each point in Dark Mastery steals an extra 2hp.',
  image: skillsIcons.drainLife,
  cost: 3,
};
