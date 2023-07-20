import React from "react";
import './navbar.css'

const Navbar:React.FC = () => {
    return (
        <div className="navbar">
            <h1>VotePoll</h1>
            <div className="links">
                <button>Create Poll</button>
                <button>My Polls</button>
            </div>
        </div>
    )
}

export default Navbar