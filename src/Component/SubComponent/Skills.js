import React from 'react';
import '../../css/style.css';

function subtitleIsArray(arr){
    
    if (Array.isArray(arr)){
        var listItems = arr.map((items) =>  <li key={items} className='skill_subtitle me-5 my-0'>{items}</li>);
        const retItems=<ul className='mb-3'>{listItems}</ul>
        return retItems;
    } else{
        return <p className='skill_subtitle me-5'>{arr}</p>;
    };
}

function SkillsRow(props){

    const skills_row = (
        <li>
            <p className='skill_title my-1'>{props.title}</p>
            {subtitleIsArray(props.subTitle)}
        </li>
    );

    return skills_row
}


export default SkillsRow;
