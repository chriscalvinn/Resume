import React from 'react';
import '../css/style.css';

function Bio(){
    const bio = (
        <div className='row'>
            <div className='col m-3'>
                <div className='row'>
                    <h3>Profile</h3>
                    <hr></hr>
                    <div className='d-inline-flex align-items-center'>
                        <p className='lead flex-fill paragraph-font'>Birthplace: </p>
                        <p className='flex-fill paragraph-font'>Jakarta</p>
                    </div>
                </div>
            </div>
        </div>
    );
    return bio
}

export default Bio;