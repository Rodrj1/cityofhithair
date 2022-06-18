const Bar = ({ value, maxValue, classWidth, type }) => {
  return (
    <div className={`barContainer ${classWidth}`}>
      {maxValue > 0 ? (
        <>
          <div
            className={`barStyle`}
            style={{
              width: `${(value / maxValue) * 100}%`,
              backgroundColor:
                type == "mana" ? `hsl(214, 86%, 58%)` : "hsl(0, 94%, 45%)",
            }}
          ></div>{" "}
          <span>
            {type == "mana" ? "Spiritual Power:" : "Health:"} {value} /{" "}
            {maxValue}
          </span>
        </>
      ) : (
        <>
          <div
            className={`barStyle`}
            style={{
              width: `${(value / maxValue) * 100}%`,
              backgroundColor: `hsl(80, 90%, 100%)`,
            }}
          ></div>
          <span>
            Spiritual Power: {0} / {0}
          </span>
        </>
      )}
    </div>
  );
};

export default Bar;
