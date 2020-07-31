import React from 'react';
import './error.sass'
import errorGIF from './giphy (1).gif'

const Error = () => {
    return (
        <div className='error'>
            <div className='error-img'>
                <img src={errorGIF} alt="ERROR"/>
            </div>

            <p>Oops! The site is down.</p>
        </div>
    );
};

export default Error;