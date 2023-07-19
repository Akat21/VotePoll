import React from "react";
import { useNavigate } from 'react-router-dom';
import Question from "./components/Question";
import Answer from "./components/Answer";

const MainForm: React.FC = () =>{
    const [question, setQuestion] = React.useState<string>("")
    const [answers, setAnswers] = React.useState<string[]>([""])
    const navigate = useNavigate();

    const onSubmitHandle = () =>{
        const randomId = Math.random().toString(36).slice(2, 12)
        navigate(`/${randomId}`);
    }   

    return (
        <div className="pool-creator-main-form-container">
            <form className="pool-creator-main-form">
                <Question question={question} setQuestion={setQuestion}/>
                <Answer answers={answers} setAnswers={setAnswers}/>
                <button type="button" onClick={onSubmitHandle} className="submit-create-btn">Submit</button>
            </form>
        </div>
    )
}

export default MainForm