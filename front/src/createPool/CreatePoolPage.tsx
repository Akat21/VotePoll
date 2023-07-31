import React from "react";
import './createPoolPage.css'
import MainForm from "./MainForm";

const CreatePoolPage:React.FC = () =>{
    return (
        <div className="poll-creator-main-container">
            <h1 style={{color: "white"}}>Pool Creator</h1>
            <MainForm />
        </div>
    )
}

export default CreatePoolPage