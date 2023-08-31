import React from 'react';
import css from './Statistic.module.css';
import PropTypes from 'prop-types';

export default function Statistic({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div>
      <div>
        <ul className={css.list}>
          <li className={css.item_green}>
            Good:
            <span className={css.value}> {good}</span>
          </li>
          <li className={css.item_neutral}>
            Neutral:
            <span className={css.value}> {neutral}</span>
          </li>
          <li className={css.item_bad}>
            Bad:
            <span className={css.value}> {bad}</span>
          </li>{' '}
        </ul>
      </div>
      <div className={css.container_feedback}>
        <ul className={css.list_feedback}>
          <li className={css.item}>
            Total:
            <span className={css.value}> {totalFeedback}</span>
          </li>
          <li className={css.item}>
            Positive feedback:
            <span className={css.value}> {positiveFeedback}%</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
