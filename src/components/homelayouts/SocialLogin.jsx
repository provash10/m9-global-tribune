import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold'>Login With</h2>
            <div className="flex  items-center justify-center gap-2">
                <button className="click-btn ">
                    <FcGoogle size={30} />
                </button>

                <button className="click-btn ">
                    <FaFacebook size={30} />
                </button>

                <button className="click-btn ">
                    <FaGithub size={30} />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;