import React from "react";
import { useLocation } from "react-router-dom"
import MainForm from "./MainForm";
import ShareForm from "./ShareForm";
import VotePollAPI from "../api/VotePollAPI";
import { Poll } from "../../types/customTypes";
import './poll.css'

const Pool: React.FC = () =>{
    const location = useLocation()
    const [pollData, setPollData] = React.useState<Poll | undefined>()

    React.useEffect(()=>{
        const getData: () => Promise<void> = async () =>{
            try{
                const response: Poll = await VotePollAPI.get(`/${location.pathname.substring(1)}`)
                setPollData({question: response.question, answers: response.answers})
            } catch(err) {
                console.log(err)
            }
        }
        getData()
    }, [])

    

    return(
        <div className="poll-creator-main-container">
            {pollData && <MainForm question={pollData.question} answers={pollData.answers}/>}
            <ShareForm link={"link"}/>
        </div>
    ) 
}

export default Pool