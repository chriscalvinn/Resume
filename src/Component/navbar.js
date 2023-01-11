import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import { Container, Nav,  NavLink } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

function NavBar(){
    const [expanded, setExpanded] = useState(false);

    const navbar = (
        
        <Navbar expand='md' bg='light' className=" sticky-top p-2" expanded={expanded}>
            <Container className=' mx-0'>
                <Navbar.Toggle aria-controls='navbar-nav-id' onClick={() => setExpanded(expanded ? false : "expanded")}/>
                <Navbar.Collapse id='navbar-nav-id'>
                    <Nav>
                        <Nav.Item className=" m-1 p-1">
                            <Link className="nav-link" to="" onClick={() => setExpanded(false)}>Home</Link>
                        </Nav.Item>
                        <Nav.Item className=" m-1 p-1">
                            <Link className="nav-link" to="education" onClick={() => setExpanded(false)}>Education</Link>
                        </Nav.Item>
                        <Nav.Item className=" m-1 p-1">
                            <Link className="nav-link" to="work-exp" onClick={() => setExpanded(false)}>Work Experience</Link>
                        </Nav.Item>
                        <Nav.Item className=" m-1 p-1">
                            <Link className="nav-link" to="org-exp" onClick={() => setExpanded(false)}>Organizational Experiences</Link>
                        </Nav.Item>
                        <Nav.Item className=" m-1 p-1">
                            <Link className="nav-link" to="project" onClick={() => setExpanded(false)}>Projects</Link>
                        </Nav.Item>
                        <Nav.Item className="m-1 p-1">
                            <Link className="nav-link" to="skill" onClick={() => setExpanded(false)}>Skills</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>            
    );
    return navbar
}

export default NavBar;