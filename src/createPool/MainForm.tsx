import React from "react";
import Question from "./components/Question";
import Answer from "./components/Answer";

const MainForm: React.FC = () =>{
    const [question, setQuestion] = React.useState<string>("")
    const [answers, setAnswers] = React.useState<string[]>([""])

    const Answers = answers.map(item => {
        return <input type="text" className="answer" name="answer" value={item}/>
    }) 
    
    return (
        <div className="pool-creator-main-form-container">
            <form action="POST" className="pool-creator-main-form">
                <Question question={question} setQuestion={setQuestion}/>
                <Answer answers={answers} setAnswers={setAnswers}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MainForm