import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNewsUp = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='btn px-3 py-2'>Latest</p>
            <Marquee className='flex gap-5 btn' pauseOnHover={true} speed={50}>
                <p className='font-bold'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, dolorum!
                </p>
                <p className='font-bold'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, dolorum!
                </p>
                <p className='font-bold'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, dolorum!
                </p>
            </Marquee>

        </div>
    );
};

export default BreakingNewsUp;