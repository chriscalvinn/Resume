import React from 'react';
import '../../css/style.css';

function OrgRow(props){
    const org_row = (
        <li>
            <p className='org_title my-1'>{props.title}</p>
            <p className='org_subtitle'>{props.subTitle}</p>
        </li>
    );

    return org_row
}

export default OrgRow