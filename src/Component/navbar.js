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
                        <Link className="nav-link" to="/blogs">Blogs</Link>
                    </li>
                    <li className="navbar-item m-1 p-1">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>            
    );
    return navbar
}

export default Navbar;