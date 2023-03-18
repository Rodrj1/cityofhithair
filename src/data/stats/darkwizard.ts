import { heroPortraits } from '../general';
import { drinkLifePotion, drinkManaPotion } from '../skills/combat';
import {
  darkAttack,
  drainLife,
  vulnerability,
  weakness,
} from '../skills/darkmagic';
import attackwizard from '../../assets/sound/attackwizard.wav';
import hittedwizard from '../../assets/sound/hittedwizard.wav';
import deathwizard from '../../assets/sound/deathwizard.wav';

const attackWizard = () => {
  new Audio(attackwizard).play();
};

const hittedWizard = () => {
  new Audio(hittedwizard).play();
};

const deathWizard = () => {
  new Audio(deathwizard).play();
};

export const wizardStats = {
  id: 150, 
  level: "hithair",
  player: true,
  name: '',
  health: 47,
  maxHealth: 47,
  magic: 8,
  maxMagic: 8,
  attack: 5,
  defaultAttack: 5,
  defense: 1,
  criticalChance: 0,
  removedAttack: 0,
  removedDefense: 0,
  frenzyAttack: 0,
  defendArmor: 0,
  vulnerabilityStatus: false,
  weaknessStatus: false,
  defenseStatus: 0,
  frenzyStatus: 0,
  darkMastery: 2,
  portrait: heroPortraits.darkmage,
  portraitFace: heroPortraits.darkmageface,
  soundAttack: attackWizard,
  soundHitted: hittedWizard,
  soundDeath: deathWizard,
  heroClass: '',
  skills: [darkAttack, weakness, vulnerability, drainLife],
  potions: [drinkLifePotion, drinkManaPotion],
};
