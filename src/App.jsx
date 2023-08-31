import React, { useState } from 'react';
import css from './app.module.css';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';
import Statistic from 'components/Statistic/Statistic';

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const options = Object.keys(feedback); // [good, neutral, bad]

  const handleFeedbackName = currentFeedback => {
    setFeedback(prev => ({
      ...prev,
      [currentFeedback]: prev[currentFeedback] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce(
      (total, element) => total + element,
      0
    );
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const totalFeedback = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <div className={css.container}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={options}
          onFeedbackName={handleFeedbackName}
        />
      </Section>

      <Section title={'Statistics'}>
        {totalFeedback ? (
          <Statistic
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
}
