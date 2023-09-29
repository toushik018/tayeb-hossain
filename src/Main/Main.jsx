import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import ScrollableRedLine from '../hooks/ScrollableRedLine';
import Footer from '../Home/Footer/Footer';


const Main = () => {
    return (
        <div>
            <ScrollableRedLine />
            <Navbar />
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Main;
