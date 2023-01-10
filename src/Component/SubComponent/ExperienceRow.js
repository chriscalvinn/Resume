import React from 'react';
import '../../css/style.css';

function ExperienceRow(props){
    const experience_row = (
        <div className='d-flex flex-column align-content-center mb-3'>
            <p className='exp_title me-3 mb-1'>{props.title} </p>
            <p className='exp_subtitle mb-1'>{props.subTitle}</p>
            <p className='exp_subtitle mb-1'>{props.place}</p>
            <p className='exp_text mb-1'>{props.years}</p>
        </div>
    );

    return experience_row
}


export default ExperienceRow;
