import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onFeedbackName }) {
  // console.log(options);
  return (
    <div className={css.container_buton}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          className={css.button}
          onClick={() => onFeedbackName(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onFeedbackName: PropTypes.func.isRequired,
};
