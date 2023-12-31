import React from 'react'
import { Answers } from '../../types/customTypes'
import Chart from './components/Chart'

interface MainProps{
    question: string
    answers: Answers[]
}

const Main: React.FC<MainProps> = ({question, answers}) => {

    const votes = React.useMemo<number>(()=>{
        return answers.reduce((acc, obj) => acc + obj.count, 0)
    }, [answers])

    const calculateBorderRadius = React.useCallback((answer: Answers)=>{
        if ((answer.count/votes * 100) === 100){
            return {borderRadius: '20px'}
        } else {
            return {borderBottomLeftRadius: '20px', borderTopLeftRadius: '20px'}
        }
    },[])

    const Answers = answers.map((answer, idx)=>{
        return(
            <div className="vote-count-container" key={idx}>
                <div className="vote-count-label">
                    <p>{answer.name}</p>
                    <div className="vote-count-label-right">
                        <p>{`${Math.floor(answer.count/votes * 100)}%`}</p>
                        <p>{`(${answer.count} votes)`}</p>
                    </div>
                </div>
                <div className="progress-bar">
                    <div className="progress" 
                         style={{width: `${(answer.count/votes * 100)}%`, ...calculateBorderRadius(answer)}} />
                </div>
            </div>
        )
    })

    return(
        <div className="main-content-results-container">
            <div className="left-content-container">
                <h1>{question}</h1>
                {Answers}
                <p className='total'>Total votes: {votes}</p>
            </div>
            <div className="right-content-container">
                <Chart answers={answers}/>
            </div>
        </div>
    )
}

export default Main