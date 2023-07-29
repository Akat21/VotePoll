import React from 'react'
import './resultsPage.css'
import Main from './Main'
import { Poll } from '../../types/customTypes'
import VotePollAPI from '../api/VotePollAPI'

const ResultsPage: React.FC = () =>{
    const [pollData, setPollData] = React.useState<Poll | undefined>()
    
    React.useEffect(()=>{
        const getData: () => Promise<void> = async () =>{
            try{
                const response: Poll = await VotePollAPI.get(`${location.pathname.slice(0, -8)}`)
                setPollData({question: response.question, answers: response.answers})
            } catch(err) {
                console.log(err)
            }
        }
        getData()
    },[])


    return(
        <div className="poll-creator-main-container">
            <div className="poll-results-container">
                {pollData && <Main question={pollData.question} answers={pollData.answers}/>}
                <div className="btns-container">
                    <button>Refresh</button>
                    <button>Back to Poll</button>
                </div>
            </div>
        </div>
    )
}

export default ResultsPage