import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  feedbackGiven,
  title,
}) => {
  return (
    <div>
      <h2 className={css.title}>{title}</h2>
      {feedbackGiven ? (
        <ul className={css.statsList}>
          <li className={css.statsItem} name="good">
            Good: {good}
          </li>
          <li className={css.statsItem} name="neutral">
            Neutral: {neutral}
          </li>
          <li className={css.statsItem} name="bad">
            Bad: {bad}
          </li>
          <li className={css.statsItem}>Total: {total}</li>
          <li className={css.statsItem}>
            Positive feedback: {positivePercentage}%.
          </li>
        </ul>
      ) : (
        <p>There is no feedback yet.</p>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  feedbackGiven: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};
