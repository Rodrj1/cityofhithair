import { useMerchant } from '../../features/components/Dialog';
import { useAnnouncerStore, useDialogStore } from '../../stores';
import { ShowItemBought } from '../Announcers';
import { Centerer } from '../Centerer';
import previewimg from '../../assets/skills/preview.webp';
import ItemPreview from '../ItemPreview/ItemPreview';
import style from '../../styles/Dialog.module.scss';

const Dialog = () => {
  const { updateDialogStatus } = useDialogStore();
  const { merchantInventory } = useMerchant();
  const { handleItemPreview } = useAnnouncerStore();
  const currentDialog = useDialogStore((state) => state.dialog);
  const isVisible = useAnnouncerStore((state) => state.isAnnouncerVisible);
  const isItemPreviewVisible = useAnnouncerStore(
    (state) => state.isItemPreviewVisible
  );

  return (
    <div className={style.container}>
      <h4>{currentDialog.name}</h4>

      <img
        className={style.portrait}
        src={currentDialog.portrait}
        alt={currentDialog.name}
      />

      {currentDialog.name == 'Merchant' && (
        <div className={style.inventory}>
          {merchantInventory.map((item) => (
            <div key={item.name}>
              <img src={item.image} />
              <img
                className=""
                src={previewimg}
                alt="Eye button for preview"
                onClick={() => handleItemPreview(item)}
              />
            </div>
          ))}
        </div>
      )}

      {isItemPreviewVisible && (
        <Centerer>
          <ItemPreview />
        </Centerer>
      )}

      {isVisible && (
        <Centerer>
          <ShowItemBought />
        </Centerer>
      )}

      <div className={style.options}>
        {currentDialog?.options?.map((option, index) => (
          <button key={index} onClick={option.createDialog}>
            {option.text}
          </button>
        ))}
      </div>

      <div className={style.dialogBox}>
        <p>{currentDialog.text}</p>
      </div>

      <button onClick={updateDialogStatus}>Goodbye</button>
    </div>
  );
};

export default Dialog;
