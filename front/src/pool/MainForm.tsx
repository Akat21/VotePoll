import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Answers, MongoDBResponse } from '../../types/customTypes';
import VotePollAPI from '../api/VotePollAPI';
import ErrorBox from '../createPool/components/ErrorBox';

interface MainFormProps{
    question: string
    answers: Answers[]
}

const MainForm: React.FC<MainFormProps> = ({question, answers}) =>{
    const [answer, setAnswer] = React.useState<string | undefined>()
    const [errorMessage, setErrorMessage] = React.useState<string | undefined>()
    const navigate = useNavigate();
    const location = useLocation();

    const onSubmitHandle = () =>{
        console.log(answer)
        answer ? postData() : setErrorMessage("You need to choose an answer!")
    }

    const postData: () => Promise<void> = async () =>{
        try{
            const newAnswers = answers.map((item) => {
                if (item.name === answer) {
                  return { ...item, count: item.count + 1 };
                } else {
                  return item;
                }
            })
            const response: MongoDBResponse = await VotePollAPI.patch(`${location.pathname}`, {answers: newAnswers})
            navigate(`${location.pathname}/results`)
        } catch(err) {
            console.log(err)
        }
    }

    const onOptionChangeHandle = (value: string) =>{
        setAnswer(value)
    }

    const Answers = answers.map((item, idx)=>{
        return (
            <label key={idx}>
                <input type="radio" name="answer" id="answer-checkbox" value={item.name} 
                       checked={answer === item.name} onChange={(e)=>onOptionChangeHandle(e.target.value)}/>
                <p>{item.name}</p>
            </label>
        )
    })

    return(
        <div className="pool-answers-main-form-container">
            <h1>{question}</h1>
            <form className="pool-answers-main-form">
                <h2>Make a choice:</h2>
                {Answers}
                {errorMessage && <ErrorBox text={errorMessage}/>}
                <button type="button" onClick={onSubmitHandle} className="submit-vote-btn">Vote</button>
            </form>
        </div>
    )
}

export default MainForm