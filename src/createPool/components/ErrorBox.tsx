import React from "react";

interface ErrorBoxProps{
    text: string
}

const ErrorBox: React.FC<ErrorBoxProps> = ({text}) =>{
    return(
        <div className="error-container">
            <p>{text}</p>
        </div>
    )
}

export default ErrorBox