import React from 'react'
import logo from '../Assets/logo.jpg'

function About() {
    return (
        <div className='about-container' id='about'>
            <div className='img-content'>
                <img src={logo} />
            </div>
            <div className='about-content'>
                <div className='headline-content'>
                    <h1>About Me</h1>
                    <h1 className='shadowName'>About</h1>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
                <div className='about-details'>
                    <div className='about-details-data'>
                        <label>Name:</label>
                        <span>Amol Mahor</span>
                    </div>
                    <div className='about-details-data'>
                        <label>Date of birth:</label>
                        <span>November 24, 2000</span>
                    </div>
                    <div className='about-details-data'>
                        <label>Address:</label>
                        <span>Dange Chowk, Pune</span>
                    </div>
                    <div className='about-details-data'>
                        <label>Zip Code:</label>
                        <span>411033</span>
                    </div>
                    <div className='about-details-data'>
                        <label>Gmail:</label>
                        <span>amolmahor50@gmail.com</span>
                    </div>
                    <div className='about-details-data'>
                        <label>Phone:</label>
                        <span>+91 9673170912</span>
                    </div>
                </div>
                <p className='project-counter'><span>25 </span>Project complete</p>
                <button className='cv-btn'>DOWNLOAD CV</button>
            </div>
        </div>
    )
}

export default About