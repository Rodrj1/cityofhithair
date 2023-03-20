import {
  useAnnouncerStore,
  useBattleStore,
  useLevelsStore,
  usePlayerStore,
} from '../../../stores';
import { Action, Player, Unit } from '../../../types';
import { skillsIcons } from '../../../data/skills';
import { waitTimer } from '../../../helpers';
import { useLoot } from './useLoot';
import { useActionSounds, useUISounds } from '../../hooks';

export const useBattleHandler = () => {
  const { updateFightingStatus, updateAction } = useBattleStore();
  const { updateTurn, updateBoardEnemy, updateBoardPlayer, resetTurn } =
    useBattleStore();
  const { handleAnnouncer, updateAnnouncerAction } = useAnnouncerStore();
  const { playWarning } = useUISounds();
  const { updateLevelEnemies } = useLevelsStore();
  const { handleLoot } = useLoot();
  const { updatePotion } = usePlayerStore();
  const healthPotionsInInventory = usePlayerStore(
    (state) => state.healthPotions
  );
  const manaPotionsInInventory = usePlayerStore((state) => state.manaPotions);
  const player = useBattleStore((state) => state.boardPlayer);
  const enemy = useBattleStore((state) => state.boardEnemy);
  const turn = useBattleStore((state) => state.turn);

  const {
    playDefend,
    playFrenzy,
    playVulnerability,
    playWeakness,
    playDrainLife,
    playDrinkPotion,
    playDrinkPotionMana,
  } = useActionSounds();

  const showAnnouncer = (
    triggeringUnit: Unit | Player,
    target: Unit | Player,
    icon: string,
    text: string
  ) => {
    const action: Action = {
      text: text,
      attackerImg: triggeringUnit.portraitFace,
      receiverImg: target.portraitFace,
      skillIcon: icon,
    };
    updateAnnouncerAction(action);
    handleAnnouncer();
    setTimeout(() => {
      handleAnnouncer();
    }, 1500);
  };

  const handleOnDeath = (enemy: Player | Unit) => {
    enemy.soundDeath();
    updateLevelEnemies(enemy.level, enemy.id).then(async (enemiesInLevel) => {
      if (enemiesInLevel.length == 0) {
        await waitTimer(1400);
        resetTurn();
        updateFightingStatus();
        handleLoot(enemy.level);
      } else {
        await waitTimer(1400);
        updateFightingStatus();
      }
    });
  };

  const attackEnemy = (turn: string, player: Player, enemy: Unit) =>
    new Promise<number>((resolve) => {
      let triggeringUnit: Unit | Player;
      let target: Unit | Player;

      if (turn == 'Player') {
        triggeringUnit = player;
        target = enemy;
      } else {
        triggeringUnit = enemy;
        target = player;
      }

      handleActionMessage('Attack', triggeringUnit.name, target.name).then(
        (text) => {
          showAnnouncer(triggeringUnit, target, skillsIcons.attack, text);
        }
      );

      let damage = Math.ceil(triggeringUnit.attack) * (1 - target.defense / 10);
      let rollCritical = Math.floor(Math.random() * 101);
      if (rollCritical <= triggeringUnit.criticalChance) damage * 2;

      const updateHealth = target.health - damage;

      const updateTarget = {
        ...target,
        health: updateHealth,
      };

      if (turn == 'Player') {
        updateBoardEnemy(updateTarget as Unit);
      } else {
        updateBoardPlayer(updateTarget as Player);
      }

      triggeringUnit.soundAttack();
      target.soundHitted();

      if (updateHealth < 0 && target == enemy) {
        handleOnDeath(enemy);
      }

      resolve(updateHealth);
    });

  const darkAttack = (player: Player, enemy: Unit) =>
    new Promise<number>((resolve) => {
      const triggeringUnit = player;
      const target = enemy;

      handleActionMessage('Attack', triggeringUnit.name, target.name).then(
        (text) => {
          showAnnouncer(triggeringUnit, target, skillsIcons.attack, text);
        }
      );

      const damage =
        Math.ceil(triggeringUnit.attack) * (1 - target.defense / 10);

      const healingSurpassesMaxHealth =
        triggeringUnit.health + 1 + 1 * triggeringUnit.darkMastery >
        triggeringUnit.maxHealth;

      const updateTriggeringUnitHealth = healingSurpassesMaxHealth
        ? triggeringUnit.maxHealth
        : triggeringUnit.health + 1 + 1 * triggeringUnit.darkMastery;

      const updateTriggeringUnit = {
        ...triggeringUnit,
        health: updateTriggeringUnitHealth,
      };

      const updateTargetHealth = target.health - damage;

      const updateTarget = {
        ...target,
        health: updateTargetHealth,
      };

      triggeringUnit.soundAttack();
      target.soundHitted();

      updateBoardEnemy(updateTarget as Unit);

      updateBoardPlayer(updateTriggeringUnit as Player);

      if (updateTargetHealth < 0 && target == enemy) {
        handleOnDeath(enemy);
      }

      resolve(updateTargetHealth);
    });

  const castOnSelf = (selfUnit: Player, action: 'Frenzy' | 'Defend') =>
    new Promise<void>((resolve) => {
      const icons = {
        Frenzy: skillsIcons.frenzy,
        Defend: skillsIcons.defend,
      };
      const icon = icons[action];

      handleActionMessage(action, selfUnit.name, selfUnit.name).then((text) => {
        showAnnouncer(selfUnit, selfUnit, icon, text);
      });

      let updateHero: Player = {} as Player;

      if (action == 'Frenzy') {
        playFrenzy();
        const updateAttack = selfUnit.attack + 7;
        const updateDefense = selfUnit.defense - 2;
        const updateSP = selfUnit.magic - 1 < 0 ? 0 : selfUnit.magic - 1;

        const updateAttributes = {
          ...selfUnit,
          attack: updateAttack,
          defense: updateDefense,
          magic: updateSP,
        };
        updateHero = updateAttributes;
      }

      if (action == 'Defend') {
        playDefend();
        const updateDefense = selfUnit.defense + 1;
        const updateSP = selfUnit.magic - 1 < 0 ? 0 : selfUnit.magic - 1;

        const updateAttributes = {
          ...selfUnit,
          defense: updateDefense,
          magic: updateSP,
        };
        updateHero = updateAttributes;
      }

      updateBoardPlayer(updateHero);

      resolve();
    });

  const sacrifice = (player: Player, enemy: Unit) =>
    new Promise<void>((resolve) => {
      const triggeringUnit = player;
      const target = enemy;

      handleActionMessage('Sacrifice', triggeringUnit.name, target.name).then(
        (text) => {
          showAnnouncer(triggeringUnit, target, skillsIcons.sacrifice, text);
        }
      );

      const updateSP = triggeringUnit.magic - 2;
      const updateTriggeringUnitHealth = triggeringUnit.health - 11;

      const updateTriggeringUnit = {
        ...triggeringUnit,
        health: updateTriggeringUnitHealth,
        magic: updateSP,
      };

      const updateTarget = {
        ...target,
        defense: -3,
        vulnerabilityStatus: true
      };

      triggeringUnit.soundAttack();
      target.soundHitted();

      updateBoardEnemy(updateTarget as Unit);
      updateBoardPlayer(updateTriggeringUnit as Player);

      resolve();
    });

  const weakness = (turn: string, player: Player, enemy: Unit) =>
    new Promise<void>((resolve) => {
      let caster: Unit | Player;
      let target: Unit | Player;

      if (turn == 'Player') {
        caster = player;
        target = enemy;
      } else {
        caster = enemy;
        target = player;
      }

      playWeakness();

      handleActionMessage('Weakness', caster.name, target.name).then((text) => {
        showAnnouncer(caster, target, skillsIcons.weakness, text);
      });

      const reducedAttack =
        target.attack * (1 - (0.3 + 0.05 * caster.darkMastery));
      const updateMagic = caster.magic - 2;

      const updateTarget = {
        ...target,
        attack: reducedAttack,
        weaknessStatus: true
      };

      const updateCaster = {
        ...caster,
        magic: updateMagic,
      };

      if (turn == 'Player') {
        updateBoardPlayer(updateCaster as Player);
        updateBoardEnemy(updateTarget as Unit);
      } else {
        updateBoardPlayer(updateTarget as Player);
        updateBoardEnemy(updateCaster as Unit);
      }

      resolve();
    });

  const vulnerability = (turn: string, player: Player, enemy: Unit) =>
    new Promise<void>((resolve) => {
      let caster: Unit | Player;
      let target: Unit | Player;

      if (turn == 'Player') {
        caster = player;
        target = enemy;
      } else {
        caster = enemy;
        target = player;
      }

      playVulnerability();

      handleActionMessage('Vulnerability', caster.name, target.name).then(
        (text) => {
          showAnnouncer(caster, target, skillsIcons.vulnerability, text);
        }
      );

      const updateCasterMagic = caster.magic - 2;

      const updateCaster = {
        ...caster,
        magic: updateCasterMagic,
      };

      const reducedDefense =
        target.defense * (1 - (0.3 + 0.05 * caster.darkMastery));

      const updateDefense = target.defense - reducedDefense;

      const updateTarget = {
        ...target,
        defense: updateDefense,
        vulnerabilityStatus: true
      };

      if (turn == 'Player') {
        updateBoardPlayer(updateCaster as Player);
        updateBoardEnemy(updateTarget as Unit);
      } else {
        updateBoardPlayer(updateTarget as Player);
        updateBoardEnemy(updateCaster as Unit);
      }

      resolve();
    });

  const drainLife = (turn: string, player: Player, enemy: Unit) =>
    new Promise<number>((resolve) => {
      let caster: Unit | Player;
      let target: Unit | Player;

      if (turn == 'Player') {
        caster = player;
        target = enemy;
      } else {
        caster = enemy;
        target = player;
      }

      playDrainLife();
      target.soundHitted();

      handleActionMessage('Drain Life', caster.name, target.name).then(
        (text) => {
          showAnnouncer(caster, target, skillsIcons.drainLife, text);
        }
      );

      const healingSurpassesMaxHealth = caster.health + 10 > caster.maxHealth;

      const updateCasterHealth = healingSurpassesMaxHealth
        ? caster.maxHealth
        : caster.health + 10;
      const updateCasterMagic = caster.magic - 3;

      const updateCaster = {
        ...caster,
        health: updateCasterHealth,
        magic: updateCasterMagic,
      };

      const updateTargetHealth = target.health - 10;
      const updateTarget = {
        ...target,
        health: updateTargetHealth,
      };

      if (turn == 'Player') {
        updateBoardPlayer(updateCaster as Player);
        updateBoardEnemy(updateTarget as Unit);
      } else {
        updateBoardPlayer(updateTarget as Player);
        updateBoardEnemy(updateCaster as Unit);
      }

      if (updateTargetHealth < 0 && target == enemy) {
        handleOnDeath(enemy);
      }

      resolve(updateTargetHealth);
    });

  const drinkPotion = (
    selfUnit: Player,
    type: 'healthPotions' | 'manaPotions'
  ) =>
    new Promise<void>((resolve) => {
      const icons = {
        healthPotions: skillsIcons.healthPotion,
        manaPotions: skillsIcons.manaPotion,
      };
      const icon = icons[type];

      updatePotion(type, -1);

      const potion =
        type == 'healthPotions' ? 'Potion Of Life' : 'Potion of Magic';

      handleActionMessage(potion, selfUnit.name, selfUnit.name).then((text) => {
        showAnnouncer(selfUnit, selfUnit, icon, text);
      });

      let updateSelfUnit: Player = {} as Player;

      if (type == 'healthPotions') {
        playDrinkPotion();
        const healingSurpassesMaxHealth =
          selfUnit.health + 15 > selfUnit.maxHealth;

        const updateHealth = healingSurpassesMaxHealth
          ? selfUnit.maxHealth
          : selfUnit.health + 15;
        updateSelfUnit = { ...selfUnit, health: updateHealth };
      }

      if (type == 'manaPotions') {
        playDrinkPotionMana();
        const restoreSurpassesMaxMagic = selfUnit.magic + 3 > selfUnit.maxMagic;

        const updateMagic = restoreSurpassesMaxMagic
          ? selfUnit.maxMagic
          : selfUnit.magic + 3;
        updateSelfUnit = { ...selfUnit, magic: updateMagic };
      }

      updateBoardPlayer(updateSelfUnit);

      resolve();
    });

  const InsufficientResources = (selfUnit: Player, message: string) => {
    playWarning();
    handleActionMessage(message, selfUnit.name, selfUnit.name).then((text) => {
      showAnnouncer(selfUnit, selfUnit, '', text);
    });
  };

  const handleActionOnEnemy = (action: string) => {
    updateAction('');
    switch (action) {
      case 'Attack':
        attackEnemy(turn, player, enemy).then(async (targetHealth) => {
          if (targetHealth > 0) {
            await waitTimer(1500);
            updateTurn();
          }
        });
        break;

      case 'Defend':
        if (turn == 'Player') {
          if (player.magic >= 1)
            castOnSelf(player, 'Defend').then(async () => {
              await waitTimer(1500);
              updateTurn();
            });
          else InsufficientResources(player, 'No Spiritual Power');
        }

        break;

      case 'Frenzy':
        if (turn == 'Player') {
          if (player.magic >= 1)
            castOnSelf(player, 'Frenzy').then(async () => {
              await waitTimer(1500);
              updateTurn();
            });
          else InsufficientResources(player, 'No Spiritual Power');
        }
        break;

      case 'Sacrifice':
        if (turn == 'Player') {
          if (player.magic >= 1 && player.health > 11)
            sacrifice(player, enemy).then(async () => {
              await waitTimer(1500);
              updateTurn();
            });
          else InsufficientResources(player, 'No Spiritual Power');
        }
        break;

      case 'Dark Magic: Attack':
        darkAttack(player, enemy).then(async (targetHealth) => {
          if (targetHealth > 0) {
            await waitTimer(1500);
            updateTurn();
          }
        });
        break;

      case 'Weakness':
        if (turn == 'Player') {
          if (player.magic >= 2)
            weakness(turn, player, enemy).then(async () => {
              await waitTimer(1500);
              updateTurn();
            });
          else InsufficientResources(player, 'No Spiritual Power');
        } else
          weakness(turn, player, enemy).then(async () => {
            await waitTimer(1500);
            updateTurn();
          });
        break;

      case 'Vulnerability':
        if (turn == 'Player') {
          if (player.magic >= 2)
            vulnerability(turn, player, enemy).then(async () => {
              await waitTimer(1500);
              updateTurn();
            });
          else InsufficientResources(player, 'No Spiritual Power');
        } else
          vulnerability(turn, player, enemy).then(async () => {
            await waitTimer(1500);
            updateTurn();
          });
        break;

      case 'Drain Life':
        if (turn == 'Player') {
          if (player.magic >= 3)
            drainLife(turn, player, enemy).then(async (targetHealth) => {
              if (targetHealth > 0) {
                await waitTimer(1500);
                updateTurn();
              }
            });
          else InsufficientResources(player, 'No Spiritual Power');
        } else
          drainLife(turn, player, enemy).then(async (targetHealth) => {
            if (targetHealth > 0) {
              await waitTimer(1500);
              updateTurn();
            }
          });
        break;

      case 'Potion Of Life':
        if (healthPotionsInInventory > 0) drinkPotion(player, 'healthPotions');
        else InsufficientResources(player, 'No Potions');
        break;

      case 'Potion Of Magic':
        if (manaPotionsInInventory > 0) drinkPotion(player, 'manaPotions');
        else InsufficientResources(player, 'No Potions');
        break;
    }
  };

  return { handleActionOnEnemy };
};

const handleActionMessage = (
  action: string,
  triggeringUnitName: string,
  targetName: string
) =>
  new Promise<string>((resolve) => {
    let actionMessage: string;

    switch (action) {
      case 'Attack' || 'Dark Magic: Attack':
        actionMessage = `${triggeringUnitName} attacks ${targetName}`;
        break;

      case 'Defend':
        actionMessage = `${triggeringUnitName} changes to Defense Stance and increases his defenses by 3.`;
        break;

      case 'Frenzy':
        actionMessage = `${triggeringUnitName} casts Frenzy on self`;
        break;

      case 'Sacrifice':
        actionMessage = `${triggeringUnitName} uses Sacrifice damaging ${targetName} armor permanently and receiving 11 damage in the process.`;
        break;

      case 'Weakness':
        actionMessage = `${triggeringUnitName} casts Weakness on ${targetName}`;
        break;

      case 'Vulnerability':
        actionMessage = `${triggeringUnitName} casts Vulnerability on ${targetName}`;
        break;

      case 'Drain Life':
        actionMessage = `${triggeringUnitName} casts Drain Life on ${targetName} taking and healing by 10 points.`;
        break;

      case 'Potion Of Life':
        actionMessage = `${triggeringUnitName} drinks a potion and heals up by 15 points.`;
        break;

      case 'Potion Of Mana':
        actionMessage = `${triggeringUnitName} drinks a potion and restores 3 spiritual power.`;
        break;

      case 'No Potions':
        actionMessage = 'You are out of potions!';
        break;

      case 'No Spiritual Power':
        actionMessage = 'Your spiritual power is spent!';
        break;

      default:
        actionMessage = '';
        break;
    }

    resolve(actionMessage);
  });
