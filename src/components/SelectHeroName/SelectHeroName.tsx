import { useSelectHeroName } from '../../features/components/SelectHeroName';

const SelectHeroName = () => {
  const { handleOnChange, updateName } = useSelectHeroName();

  return (
    <>
      <h4 className="input-item">What is your name?</h4>

      <input
        className="input-item"
        type="text"
        id="getName"
        name="getName"
        onChange={handleOnChange}
      />

      <button onClick={updateName}>Confirm Name</button>
    </>
  );
};

export default SelectHeroName;
