import React, { useEffect, useReducer } from 'react';
import Header from './Header'
import Main from './Main';
import Loading from './Loader'
import Error from './Error';
import StartScreen from './StartScrren';
import Question from './Question';

const initialState = {
    questions: [],
    index: 0,
    status: 'loading',
    answer: null,
    points: 0
}

function reducer(state, action){
    switch(action.type){
        case "dataRecived":
            return{
                ...state,
                questions: action.payload,
                status: 'ready'
            };
        case "dataFailed": 
            return{
                ...state,
                status: "error"
            };
            case "start": 
            return{
                ...state,
                status: "start"
            };
            case "newAnswer":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
        default: 
            throw new Error("Action unkonwn")
    }
}


const App = () => {

    const [{questions, status, index}, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{fetch('http://localhost:9000/questions').then(res => res.json()).then(data => dispatch({type: "dataRecived", payload: data})).catch(err => dispatch({type: "dataFailed"}))},[])
    console.log(questions);

    const questionNumber = questions.length
    
    return (
        <div className='app'>
            <Header/>
            <Main>
                {status==="loading" && <Loading/>}
                {status==="error" && <Error/>}
                {status==="ready" && <StartScreen questionNumber={questionNumber} dispatch={dispatch}/>}
                {status==="start" && <Question question={questions[index]} />}                
            </Main>
        </div>
    );
};

export default App;