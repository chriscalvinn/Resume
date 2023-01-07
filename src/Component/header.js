import React from 'react';

function Header(){
    const header = (
        <div className='row p-3'>
            <div className="col-3"></div>
            <div className="col-6">
                <div className='align-middle text-center'>
                    <h1>Resume</h1>
                </div>
            </div>
            <div className="col-3"></div> 
        </div>
    );
    return header
}

export default Header;