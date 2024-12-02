import Header from './Header'
import Main from './Main';
import Loading from './Loader'
import Error from './Error';
import StartScreen from './StartScrren';
import Question from './Question';
import { useQuiz } from '../context';


const App = () => {
    const { status } = useQuiz();
    return (
        <div className='app'>
            <Header/>
            <Main>
                {status==="loading" && <Loading/>}
                {status==="error" && <Error/>}
                {status==="ready" && <StartScreen/>}
                {status==="start" && <Question/>}                
            </Main>
        </div>
    );
};

export default App;