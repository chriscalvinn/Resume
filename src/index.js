import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Organizations from './Pages/Organizations';
import Project from './Pages/Projects';
import Skill from './Pages/Skills';

//import reportWebVitals from './reportWebVitals';

const myFirstElement = <h1>Hello React!</h1>

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/resume" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="work-exp" element={<Experience />} />
            <Route path="org-exp" element={<Organizations />} />
            <Route path='education' element={<Education />}/>
            <Route path='project' element={<Project/>}/>
            <Route path='skill' element={<Skill/>}/>
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
