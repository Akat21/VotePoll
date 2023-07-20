import React from "react";
import { useLocation } from "react-router-dom";

const Pool: React.FC = () =>{
    const location = useLocation()
    const question: string = location.state.question
    return(
        <h1>{question}</h1>
    )
}

export default Pool