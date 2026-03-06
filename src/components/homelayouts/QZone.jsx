import React from 'react';
import swimmingImg from '../../assets/swimming.png';
import classImg from '../../assets/class.png';
import playImg from '../../assets/playground.png';

const QZone = () => {
    return (
        <div>
            <h1 className='text-xl text-center font-bold m-5 border-2 border-gray-500'>Q Zone</h1>
            <div className='space-y-5'>
                <img src={swimmingImg} alt="" />
                <img src={classImg} alt="" />
                <img src={playImg} alt="" />
            </div>
        </div>
    );
};

export default QZone;