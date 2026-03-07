import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
         <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='text-2xl text-center font-bold p-4 underline'>Login Your Account</h1>
                <div className="card-body">
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name" />
                        {/* Photo url */}
                        <label className="label">Photo URL</label>
                        <input type="text" className="input" placeholder="Photo url" />

                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />

                        <button className="btn btn-neutral mt-4">Register</button>

                        <p className='text-sm font-semibold px-2 py-2'>Already Have An Account ? Please {' '}
                            <Link to="/auth/login" className='click-btn'>Login</Link>
                        </p>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Register;