import React from 'react';
import { NavLink } from 'react-router';
// import loginImg from "../assets/user.png"
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center bg-slate-700 text-white font-bold py-2'>
            <div className=''></div>
            <div className="nav flex justify-between items-center gap-2">
                <NavLink className='click-btn' to="/career">Career</NavLink>
                <NavLink className='click-btn' to="/">Home</NavLink>
                <NavLink className='click-btn' to="/about">About</NavLink>
            </div>
            <div className="login-btn flex justify-between items-center gap-4 px-2">
                {/* <img src={loginImg} alt="login img" /> */}
                <FaUserCircle size={40} />
                <button className='click-btn'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;
