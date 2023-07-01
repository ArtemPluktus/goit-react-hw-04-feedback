import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback, title }) => {
  return (
    <div>
      <h1 className={css.title}>{title}</h1>
      <ul className={css.btnList}>
        <li className={css.btnItem}>
          <button
            type="button"
            className={css.btn}
            onClick={onLeaveFeedback}
            name={options[0]}
          >
            Good
          </button>
        </li>
        <li className={css.btnItem}>
          <button
            type="button"
            className={css.btn}
            onClick={onLeaveFeedback}
            name={options[1]}
          >
            Neutral
          </button>
        </li>
        <li className={css.btnItem}>
          <button
            type="button"
            className={css.btn}
            onClick={onLeaveFeedback}
            name={options[2]}
          >
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
