import React from 'react';
import Header from "../Header";
import {Outlet} from "react-router-dom";
import Footer from "../Footer";
import PropTypes from 'prop-types';

function Layout() {
    return (
        <>
            <Header />
            <Outlet/>
            <Footer/>
        </>
    );
}



Layout.defaultProps = {
    className: '',
};
export default Layout;