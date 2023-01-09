import React from 'react';
import '../../css/style.css';

function EducationRow(props){
    const education_row = (
        <div className='d-flex flex-column align-content-center'>
            <p className='edu_title me-3 mb-1'>{props.eduTitle} </p>
            <p className='edu_subtitle mb-1'>{props.eduSubTitle}</p>
            <p className='degree mb-1'>{props.degree}</p>
            <p className='gpa mb-1'>GPA: {props.gpa}</p>
            <p className='paragraph_font mb-1'>{props.years}</p>
        </div>
    );

    return education_row
}


export default EducationRow;
