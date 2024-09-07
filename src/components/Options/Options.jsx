import s from "./Options.module.css";

function Options({ updateFeedback, resetFeedback, totalRate }) {
  return (
    <>
      <ul className={s.optionsList}>
        <li>
          <button type="button" onClick={() => updateFeedback("good")}>
            Good
          </button>
        </li>
        <li>
          <button type="button" onClick={() => updateFeedback("neutral")}>
            Neutral
          </button>
        </li>
        <li>
          <button type="button" onClick={() => updateFeedback("bad")}>
            Bad
          </button>
        </li>

        {totalRate > 0 && (
          <li>
            <button
              type="button"
              onClick={resetFeedback}
              className={s.resetButton}
            >
              Reset
            </button>
          </li>
        )}
      </ul>
    </>
  );
}

export default Options;
