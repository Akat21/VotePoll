import React from "react";
import './navbar.css'
import { Link } from 'react-router-dom';

const Navbar:React.FC = () => {
    return (
        <div className="navbar">
            <h1>VotePoll</h1>
            <div className="links">
                <Link to="/">
                    <button>Create Poll</button>
                </Link>
                {/* <button>My Polls</button> */}
            </div>
        </div>
    )
}

export default Navbar