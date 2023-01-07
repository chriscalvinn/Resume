import React from 'react';
import '../css/style.css';

function Picture(props){
    const picture = (
        <div className='row p-4'>
            <div className='col m-2'>
                <img src={props.img} alt="" className='mx-auto d-block img-fluid rounded'></img>
                <hr className='pic_divider'/>
            </div>
        </div>
    );
    return picture
}

export default Picture;