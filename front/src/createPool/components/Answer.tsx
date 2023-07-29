import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Answers } from '../../../types/customTypes'

interface AnswerProps {
    answers: Answers[],
    setAnswers: React.Dispatch<React.SetStateAction<Answers[]>>
}

const Answer: React.FC<AnswerProps> = ({answers, setAnswers}) =>{
    const onHandleInputChange = (value: string, idx: number) =>{
        const newAnswers = [...answers]
        newAnswers[idx].name = value
        setAnswers(newAnswers)
    }

    const onHandleInputAppend = () =>{
        const newAnswers = [...answers]
        newAnswers.push({name:"", count: 0})
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
                <input type="text" className="answer" name="answer" value={item.name} onChange={(e)=>onHandleInputChange(e.target.value, idx)} placeholder={'Answer ' + (idx + 1)}/>
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
                {"Add Answer"}
            </button>
        </div>
    )
}

export default Answer