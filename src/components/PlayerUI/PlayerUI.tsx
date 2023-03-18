import { Item } from '../../types';
import { Note } from '../Note';
import { itemIcons } from '../../data/stats';
import { Centerer } from '../Centerer';
import { useDialogStore, usePlayerStore } from '../../stores';
import styles from '../../styles/PlayerUI.module.scss';

const PlayerUI = () => {
  const getPlayerHero = usePlayerStore((state) => state.player);
  const getPlayerInventory = usePlayerStore((state) => state.inventory);
  const getGold = usePlayerStore((state) => state.gold);
  const isInNote = useDialogStore((state) => state.isInNote);

  const getInventory = getPlayerInventory
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((item: Item, index: number) => (
      <img src={item.image} key={index} onClick={item.fn} />
    ));

  return (
    <div className={styles.container}>
      {isInNote && (
        <Centerer>
          <Note />
        </Centerer>
      )}
      <div>
        <h4>{getPlayerHero.name}</h4>
        <img className={styles.portrait} src={getPlayerHero.portrait} />
      </div>

      <div className={styles.stats}>
        <div>
          <img src={itemIcons.playergold} alt={'gold'} />
          <p>{getGold}</p>
        </div>

        <div>
          <img src={itemIcons.attack} alt={'damage'} />
          <p>{getPlayerHero.attack}</p>
        </div>

        <div>
          <img src={itemIcons.defense} alt={'armor'} />
          <p>{getPlayerHero.defense}</p>
        </div>

        {getPlayerHero.darkMastery > 0 && (
          <div>
            <img src={itemIcons.darktome} alt={'darkmagic'} />
            <p>{getPlayerHero.darkMastery}</p>
          </div>
        )}
      </div>

      <div className={styles.inventory}>{getInventory}</div>
    </div>
  );
};

export default PlayerUI;
