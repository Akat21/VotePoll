import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

interface AnswerProps {
    answers: string[],
    setAnswers: React.Dispatch<React.SetStateAction<string[]>>
}

const Answer: React.FC<AnswerProps> = ({answers, setAnswers}) =>{
    const onHandleInputChange = (value: string, idx: number) =>{
        const newAnswers = [...answers]
        newAnswers[idx] = value
        setAnswers(newAnswers)
    }

    const onHandleInputAppend = () =>{
        const newAnswers = [...answers]
        newAnswers.push("")
        setAnswers(newAnswers)
    }

    const onHandleInputDelete = (idx: number) =>{
        const newAnswers = [...answers]
        newAnswers.splice(idx, 1);
        setAnswers(newAnswers)
    }

    const Answers = answers.map((item, idx) => {
        return( 
            <div key={idx} className='answers-item-container'>
                <input type="text" className="answer" name="answer" value={item} onChange={(e)=>onHandleInputChange(e.target.value, idx)}/>
                {answers.length > 1 && <button type='button' onClick={() => onHandleInputDelete(idx)}>
                    <FontAwesomeIcon icon={faTimes} style={{opacity: 0.4}} fontSize={'2.5vh'}/>
                </button>}
            </div>
            
        )
    }) 

    return(
        <div className='answers-creation-container'>
            <label htmlFor="answer">Answers</label>
            {Answers}
            <button type='button' onClick={onHandleInputAppend} className='append-btn'>
                <FontAwesomeIcon icon={faPlus} style={{marginRight:'7px', opacity: 0.4}} fontSize={'2.5vh'}/> 
                {"Add Question"}
            </button>
        </div>
    )
}

export default Answer