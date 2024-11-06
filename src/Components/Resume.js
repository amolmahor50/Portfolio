import {resumeDetails} from "../Data/Data";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Resume({handleResumeDownload}) {

    useEffect(() => {
        AOS.init({duration: 1500});
    },[]);

    return (
        <div className='resume-container' id="resume">
            <div className='headline-content'>
                <h1 data-aos='fade-down'>Resume</h1>
                <h1 className='shadowName' data-aos='fade-down'>Resume</h1>
                <p className='resume-summury' data-aos='zoom-in'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>
            <div className='resume-card'>
                <div className='card'>
                    {resumeDetails.map((items, index) => (
                        <div className='card-group' key={index} data-aos='zoom-in'>
                            <span className='year'>{items.year}</span>
                            <p className='degree'>{items.degeree}</p>
                            <p className='university'>{items.university_name}</p>
                            <p className='resume-comment'>{items.comment}</p>
                        </div>
                    ))}
                </div>
                <button className='cv-btn' onClick={handleResumeDownload} data-aos='zoom-in'>DOWNLOAD CV</button>
            </div>
        </div>
    )
}

export default Resume