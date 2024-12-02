import React from 'react';
import Option from './Option';
import { useQuiz } from '../context';

const Question = () => {
    const { questions, index } = useQuiz();
    const question = questions.at(index); 
    return (
        <div>
            <h4>{question.question}</h4>
            <Option question={question}/>
        </div>
    );
};

export default Question;