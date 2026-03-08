import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthContext';

const Register = () => {
    const {createUser} =use(AuthContext);

    const handleRegister=(e)=>{
        e.preventDefault();

        const name=e.target.name.value;
        const photo=e.target.photo.value;
        const email=e.target.email.value;
        const password=e.target.password.value;

        console.log({name,photo,email,password});
        createUser(email,password)
        .then((result)=>{
            const user = result.user;
            console.log(user);
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errormessage =error.message;
            alert(errormessage);
        });
    }
    return (
         <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='text-2xl text-center font-bold p-4 underline'>Login Your Account</h1>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input type="text" name="name" className="input" placeholder="Name" required />
                        {/* Photo url */}
                        <label className="label">Photo URL</label>
                        <input type="text" name="photo" className="input" placeholder="Photo url" />

                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" required/>
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" required/>

                        <button type="submit" className="btn btn-neutral mt-4">Register</button>

                        <p className='text-sm font-semibold px-2 py-2'>Already Have An Account ? Please {' '}
                            <Link to="/auth/login" className='click-btn'>Login</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;