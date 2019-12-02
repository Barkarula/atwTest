import React from 'react';
import { Header } from "modules";
// import Footer from '../components/Footer/footer';

const Layout = (props) => {
    return (
        <div>
            <Header {...props.children} />
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default Layout;