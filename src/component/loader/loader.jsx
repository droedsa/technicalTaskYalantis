import React from 'react';
import './loader.sass'
import loader from './loader.png'

const Loader = () => {
    return (
        <div className='loader'>
            <img src={loader} alt="loader"/>
        </div>
    );
};

export default Loader;