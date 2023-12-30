import React from 'react';

const Statistics = props => {
  return (
    <div>
      <p>
        Good: <span>{props.good}</span>
      </p>
      <p>
        Neutral: <span>{props.neutral}</span>
      </p>
      <p>
        Bad: <span>{props.bad}</span>
      </p>
      <p>
        Total: <span>{props.total}</span>
      </p>
      <p>
        Positive feedback:
        <span>{props.positivePercentage}%</span>
      </p>
    </div>
  );
};

export default Statistics;
