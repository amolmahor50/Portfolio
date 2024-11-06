import React from 'react'
import logo from '../Assets/logo.jpg';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function About({handleResumeDownload}) {

    useEffect(() => {
        AOS.init({duration: 1500});
    },[]);

    return (
        <div className='about-container' id='about'>
            <div className='img-content' data-aos='fade-right'>
                <img src={logo} />
            </div>
            <div className='about-content'>
                <div className='headline-content'>
                    <h1 data-aos='fade-down'>About Me</h1>
                    <h1 className='shadowName' data-aos='fade-down'>About</h1>
                    <p data-aos='zoom-in'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
                <div className='about-details'>
                    <div className='about-details-data' data-aos='fade-down'>
                        <label>Name:</label>
                        <span>Amol Mahor</span>
                    </div>
                    <div className='about-details-data' data-aos='fade-down'>
                        <label>Date of birth:</label>
                        <span>November 24, 2000</span>
                    </div>
                    <div className='about-details-data' data-aos='fade-down'>
                        <label>Address:</label>
                        <span>Dange Chowk, Pune</span>
                    </div>
                    <div className='about-details-data' data-aos='fade-down'>
                        <label>Zip Code:</label>
                        <span>411033</span>
                    </div>
                    <div className='about-details-data' data-aos='fade-down'>
                        <label>Gmail:</label>
                        <span>amolmahor50@gmail.com</span>
                    </div>
                    <div className='about-details-data' data-aos='fade-down'>
                        <label>Phone:</label>
                        <span>+91 9673170912</span>
                    </div>
                </div>
                <p className='project-counter'><span>25 </span>Project complete</p>
                <button className='cv-btn'  onClick={handleResumeDownload} data-aos='zoom-in'>DOWNLOAD CV</button>
            </div>
        </div>
    )
}

export default About