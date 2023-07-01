import React, { Component } from 'react';
import css from './Feedback.module.css';
import { Statistics } from './Statistics.jsx';
import { FeedbackOptions } from './FeedbackOptions.jsx';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    feedbackGiven: false,
  };

  countTotalFeedback = e => {
    const initialValue = e.currentTarget.name;
    this.setState(prevState => {
      return {
        [initialValue]: prevState[initialValue] + 1,
        total: prevState.total + 1,
        feedbackGiven: true,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.state.total) * 100);
  };

  render() {
    const { good, neutral, bad, total, feedbackGiven } = this.state;
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const totalFeedback = this.countTotalFeedback;
    return (
      <section className={css.section}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={totalFeedback}
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
}
