import React from 'react';
import Navbar from '../Common/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Common/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;