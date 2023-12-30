import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
      }}
    >
      {options.map((el, index) => (
        <button
          style={{
            cursor: 'pointer',
            border: '2px solid #3498db',
            borderRadius: '5px',
            color: '#ffffff',
            backgroundColor: '#3498db',
            textTransform: 'capitalize',
          }}
          key={index}
          type="button"
          onClick={() => onLeaveFeedback(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
