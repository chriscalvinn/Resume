import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";

function Navbar(){
    const navbar = (
        
        <nav className="navbar navbar-expand bg-light sticky-top p-2">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="navbar-item m-1 p-1">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="navbar-item m-1 p-1">
                        <Link className="nav-link" to="/education">Education</Link>
                    </li>
                    <li className="navbar-item m-1 p-1">
                        <Link className="nav-link" to="/work-exp">Work Experience</Link>
                    </li>
                    <li className="navbar-item m-1 p-1">
                        <Link className="nav-link" to="/org-exp">Organizational Experiences</Link>
                    </li>
                    <li className="navbar-item m-1 p-1">
                        <Link className="nav-link" to="/project">Projects</Link>
                    </li>
                    <li className="navbar-item m-1 p-1">
                        <Link className="nav-link" to="/skill">Skills</Link>
                    </li>
                </ul>
            </div>
        </nav>            
    );
    return navbar
}

export default Navbar;