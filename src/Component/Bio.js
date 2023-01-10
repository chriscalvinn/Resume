import React from 'react';
import '../css/style.css';
import BioRow from './SubComponent/BioRow';


function Bio(){
    const bio = (
        <div className='row mx-3 mb-5'>
            <div className='d-flex mb-3 align-items-center justify-content-center'>
                <h2 id="name">Christopher Calvin</h2>
            </div>
            <h4 className='my-2'>Profile</h4>
                <hr></hr>
                <BioRow field='Birth Place: ' content='Jakarta, Indonesia'/>
                <BioRow field='Based In: ' content='Indonesia; Japan'/>
                <BioRow field='Gender: ' content='Male'/>
                <BioRow field='Telephone: ' content='+628990065144 (IDN) +817084648971 (JPN)'/>
                <BioRow field='Email: ' content='calvinirianto@gmail.com'/>
                <BioRow field='Github: ' content='github.com/chriscalvinn'/>
            </div>
    );
    return bio
}

export default Bio;