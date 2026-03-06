import React from 'react';
import { NavLink } from 'react-router';
import loginImg from "../assets/user.png"

const Navbar = () => {
    return (
        <div className='flex justify-between items-center bg-slate-500'>
            <div className=''></div>
            <div className="nav flex justify-between items-center gap-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex justify-between items-center gap-5">
                <img src={loginImg} alt="login img" />
                <button className='btn btn-primary px-5'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;
