import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import BreakingNewsUp from '../components/BreakingNewsUp';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayouts/LeftAside';
import RightAside from '../components/homelayouts/RightAside';


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
            <main className='w-11/12 mx-auto my-5  grid grid-cols-12 gap-2'>
                {/* left aside */}
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6 border-4 border-gray-200 rounded-3xl'>
                    <Outlet></Outlet>
                </section>

                {/* right aside */}
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
                
            </main>
        </div>
    );
};

export default HomeLayout;