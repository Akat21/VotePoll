import React from 'react'
import './resultsPage.css'
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import Main from './Main'
import { Poll } from '../../types/customTypes'
import VotePollAPI from '../api/VotePollAPI'

const ResultsPage: React.FC = () =>{
    const navigate = useNavigate();
    const location = useLocation();
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
        const fetchDataInterval = setInterval(getData, 5000);
        return () => clearInterval(fetchDataInterval);
    },[])


    return(
        <div className="poll-creator-main-container">
           {pollData && <div className="poll-results-container">
                <Main question={pollData.question} answers={pollData.answers}/>
                <div className="btns-container">
                    <button>
                        <FontAwesomeIcon icon={faArrowsRotate} spin />
                        <p>Auto Refresh On</p>
                    </button>
                    <button onClick={() => navigate(`${location.pathname.slice(0, -8)}`)}>Back to Poll</button>
                </div>
            </div>}
        </div>
    )
}

export default ResultsPage