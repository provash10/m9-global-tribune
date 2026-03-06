import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import BreakingNewsUp from '../components/BreakingNewsUp';
import Navbar from '../components/Navbar';


const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-2'>
                    <BreakingNewsUp></BreakingNewsUp>
                </section>
                <nav className='w-11/12 mx-auto my-2'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main>
                <section className='left_nav'></section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='right_nav'></section>
            </main>
        </div>
    );
};

export default HomeLayout;