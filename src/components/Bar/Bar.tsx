import style from '../../styles/Bar.module.scss';

interface Props {
  value: number;
  maxValue: number;
  type: string;
}

const Bar = ({ value, maxValue, type }: Props) => {
  return (
    <div className={style.container}>
      {maxValue > 0 ? (
        <>
          <div
            className={style.barStyle}
            style={{
              width: `${(value / maxValue) * 100}%`,
              background:
                type == 'mana'
                  ? `linear-gradient(to bottom, #7dcfff, #0c8eda)`
                  : 'linear-gradient(to bottom, #ce3e3e, #ac2121)',
            }}
          ></div>{' '}
          <span>
            {type == 'mana' ? 'SP:' : 'HP:'} {value.toFixed(1)} /{' '}
            {maxValue.toFixed(1)}
          </span>
        </>
      ) : (
        <>
          <div
            className={style.barStyle}
            style={{
              width: `${(value / maxValue) * 100}%`,
              backgroundColor: `hsl(80, 90%, 100%)`,
            }}
          ></div>
          <span>
            SP: {0} / {0}
          </span>
        </>
      )}
    </div>
  );
};

export default Bar;
