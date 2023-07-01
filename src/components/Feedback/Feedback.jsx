import { useState } from 'react';
import css from './Feedback.module.css';
import { Statistics } from './Statistics.jsx';
import { FeedbackOptions } from './FeedbackOptions.jsx';

export function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [feedbackGiven, setFeedbackGiven] = useState(false);

  const countTotalFeedback = e => {
    const initialValue = e.currentTarget.name;

    switch (initialValue) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
    }

    setTotal(state => state + 1);

    setFeedbackGiven(true);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100);
  };

  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();
  return (
    <section className={css.section}>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={countTotalFeedback}
        title={'Please leave feedback'}
      />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positiveFeedbackPercentage}
        feedbackGiven={feedbackGiven}
        title={'Statistics'}
      />
    </section>
  );
}
