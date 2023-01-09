import React from 'react';
import '../../css/style.css';

function BioRow(props){
    const bio_row = (
        <div className='row'>
            <div className='d-flex justify-content-between align-items-end'>
                <p className='lead me-3 mb-1'>{props.field} </p>
                <p className='paragraph_font mb-1'>{props.content}</p>
            </div>
        </div>
    );

    return bio_row
}


export default BioRow;
