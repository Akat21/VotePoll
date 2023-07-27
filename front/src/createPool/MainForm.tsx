import React from "react";
import { useNavigate } from 'react-router-dom';
import Question from "./components/Question";
import Answer from "./components/Answer";
import ErrorBox from "./components/ErrorBox";
import VotePollAPI from "../api/VotePollAPI";
import { MongoDBResponse } from "../../types/customTypes";

const MainForm: React.FC = () =>{
    const navigate = useNavigate();

    const [question, setQuestion] = React.useState<string>("")
    const [answers, setAnswers] = React.useState<string[]>([""])
    const [errorMessage, setErrorMessage] = React.useState<string | undefined>()

    const onSubmitHandle = () =>{
        if (question.length > 0 && answers.every((answer) => answer.length > 0)){
            postData()
        } else { 
            answers.every((answer) => answer.length > 0) === false ? setErrorMessage("Your answers can not be empty!") : 
            question.length === 0 ? setErrorMessage("You need to provide question!") : setErrorMessage(undefined)
            setTimeout(() => {
                setErrorMessage(undefined)
            }, 5000);
        }
    }   

    const postData: () => Promise<void> = async () =>{
        try{
            const response: MongoDBResponse = await VotePollAPI.post('', {question: question, answers: answers})
            navigate(`/${response.insertedId}`);
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="pool-creator-main-form-container">
            <form className="pool-creator-main-form">
                <Question question={question} setQuestion={setQuestion}/>
                <Answer answers={answers} setAnswers={setAnswers}/>
                {errorMessage && <ErrorBox text={errorMessage}/>}
                <button type="button" onClick={onSubmitHandle} className="submit-create-btn">Submit</button>
            </form>
        </div>
    )
}

export default MainForm