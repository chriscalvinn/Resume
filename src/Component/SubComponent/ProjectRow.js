import React from 'react';
import '../../css/style.css';

function ProjectRow(props){
    const proj_row = (
        <li>
            <div className='d-flex flex-column'>
                <p className='proj_title my-1'>{props.title}</p>
                <p className='proj_subtitle me-5'>{props.subTitle}</p>
            </div>
        </li>
    );

    return proj_row
}


export default ProjectRow;
