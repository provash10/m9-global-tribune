import React from 'react';
import logo from "../assets/global_tribune-logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3'>
            <img className='w-[350px]' src={logo} alt="global tribune" />
            <p className="text-accent">Journalism Without Fear or Favour</p>
            <p className='text-accent text-semibold'>{format(new Date(),"EEEE, MMMM MM, yyyy")}</p>
        </div>
    );
};

export default Header;