import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthContext';

const Login = () => {
    const {signIn} = use(AuthContext)

    const handleLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;

        console.log({email,password});

        signIn(email, password)
        .then((result)=>{
            const user = result.user;
            console.log(user)
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorCode, errorMessage);
        })
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='text-2xl text-center font-bold p-4 underline'>Login Your Account</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type="submit" className="btn btn-neutral mt-4">Login</button>
                        <p className='text-sm font-semibold px-2 py-2'>Don't Have An Account ? Please {' '}
                            <Link to="/auth/register" className='click-btn'>Register</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;