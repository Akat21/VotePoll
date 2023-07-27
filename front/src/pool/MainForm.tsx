import React from 'react'

interface MainFormProps{
    question: string
    answers: string[]
}

const MainForm: React.FC<MainFormProps> = ({question, answers}) =>{
    const [answer, setAnswer] = React.useState<string | undefined>()

    const onSubmitHandle = () =>{
        console.log(answer)
    }

    const onOptionChangeHandle = (value: string) =>{
        setAnswer(value)
    }

    const Answers = answers.map((item, idx)=>{
        return (
            <label key={idx}>
                <input type="radio" name="answer" id="answer-checkbox" value={item} 
                       checked={answer === item} onChange={(e)=>onOptionChangeHandle(e.target.value)}/>
                <p>{item}</p>
            </label>
        )
    })

    return(
        <div className="pool-answers-main-form-container">
            <h1>{question}</h1>
            <form className="pool-answers-main-form">
                <h2>Make a choice:</h2>
                {Answers}
                <button type="button" onClick={onSubmitHandle} className="submit-vote-btn">Vote</button>
            </form>
        </div>
    )
}

export default MainForm