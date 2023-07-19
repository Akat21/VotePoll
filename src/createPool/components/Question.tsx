import React from 'react'

interface QuestionProps{
    question: string,
    setQuestion: React.Dispatch<React.SetStateAction<string>>
}

const Question: React.FC<QuestionProps> = ({question, setQuestion}) =>{

    return(
        <div className='question-creation-container'>
            <label htmlFor="question">Question</label>
            <input type="text" className="question" name="question" placeholder='Type your question here'
                   value={(question.toString())} onChange={(e)=>setQuestion(e.target.value)}/>
        </div>
    )
}

export default Question