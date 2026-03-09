import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
// import loginImg from "../assets/user.png"
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthContext';

const Navbar = () => {
    const {user, logOut} = use(AuthContext);

    const handleLogout=()=>{
        console.log("User tring to logout");
        logOut()
        .then(()=>{
            alert("Logged Out Successfully.")
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return (
        <div className='flex justify-between items-center bg-slate-700 text-white font-bold py-2'>
            <div className='p-4'>
                {
                    user && user.email
                }
            </div>

            <div className="nav flex justify-between items-center gap-2">
                <NavLink className='click-btn' to="/career">Career</NavLink>
                <NavLink className='click-btn' to="/">Home</NavLink>
                <NavLink className='click-btn' to="/about">About</NavLink>
            </div>
            <div className="login-btn flex justify-between items-center gap-4 px-2">
                {/* <img src={loginImg} alt="login img" /> */}
                <FaUserCircle size={40} />

                {
                    user? ( <button onClick={handleLogout} className='click-btn'>Logout</button> ) : 
                   ( <Link to="/auth/login" 
                className='click-btn'>Login
                </Link>)
                }
                
            </div>
        </div>
    );
};

export default Navbar;
