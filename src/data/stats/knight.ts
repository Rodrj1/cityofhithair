import { heroPortraits } from '../general';
import { attack, defend } from '../skills';
import { drinkLifePotion, drinkManaPotion, frenzy, sacrifice } from '../skills/combat';
import hittedknight from '../../assets/sound/hittedknight.ogg';
import deathknight from '../../assets/sound/deathknight.ogg';
import attacksword from '../../assets/sound/attacksword.mp3';

const attackSword = () => {
  new Audio(attacksword).play();
};

const hittedKnight = () => {
  new Audio(hittedknight).play();
};

const deathKnight = () => {
  new Audio(deathknight).play();
};

export const knightStats = {
  id: 150, 
  level: "hithair",
  player: true,
  name: '',
  health: 65,
  maxHealth: 65,
  magic: 2,
  maxMagic: 2,
  attack: 11,
  defaultAttack:11,
  defense: 5,
  criticalChance: 0,
  removedAttack: 0,
  removedDefense: 0,
  frenzyAttack: 0,
  defendArmor: 0,
  vulnerabilityStatus: false,
  weaknessStatus: false,
  defenseStatus: 0,
  frenzyStatus: 0,
  darkMastery: 0,
  portrait: heroPortraits.knight,
  portraitFace: heroPortraits.knightheroface,
  heroClass: '',
  soundAttack: attackSword,
  soundHitted: hittedKnight,
  soundDeath: deathKnight,
  skills: [attack, defend, frenzy, sacrifice],
  potions: [drinkLifePotion, drinkManaPotion],
};
