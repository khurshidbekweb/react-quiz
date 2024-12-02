import React from 'react';

const Option = ({question}) => {
    return (
        <div>
            <div className="options">
      {question.options.map((option, index) => (
        <button
          className="btn btn-option"
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
        </div>
    );
};

export default Option;