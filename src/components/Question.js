import React from 'react';
import Option from './Option';

const Question = ({question}) => {
    console.log(question)    
    return (
        <div>
            <h4>{question.question}</h4>
            <Option question={question}/>
        </div>
    );
};

export default Question;