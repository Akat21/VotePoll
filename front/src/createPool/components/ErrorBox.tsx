import React from "react";

interface ErrorBoxProps{
    text: string
}

const ErrorBox: React.FC<ErrorBoxProps> = ({text}) =>{
    return(
        <div className="error-container">
            <h3 className="error-txt">{text}</h3>
        </div>
    )
}

export default ErrorBox