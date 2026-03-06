import React from 'react';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h1 className='text-xl text-center font-bold m-5 border-2 border-gray-500'>Find Us On</h1>
            <div>
                <div className="join join-vertical w-full">
  <button className="btn join-item"><FaFacebook size={30} /> Facebook</button>
  <button className="btn join-item"><FaSquareXTwitter size={30}  /> Twitter</button>
  <button className="btn join-item"><FaInstagramSquare size={30} /> Instagram</button>
</div>
            </div>
        </div>
    );
};

export default FindUs;