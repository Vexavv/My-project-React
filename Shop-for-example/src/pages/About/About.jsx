import React from 'react';
import './About.scss'
import BasicGrid from "../../components/BasicGrid/BasicGrid";
function About(props) {
    return (
        <div className='About'>
            <h1 className='About-title'>ABOUT US COMPANY</h1>
            <BasicGrid/>
        </div>
    );
}

export default About;