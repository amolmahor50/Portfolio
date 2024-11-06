import {Progress_Sills} from '../Data/Data';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Skills() {

    useEffect(() => {
        AOS.init({duration:1500});
    },[]);

    return (
        <div className="skill-container" id='skill'>
            <div className="headline-content">
                <h1 data-aos='fade-down'>My Skills</h1>
                <h1 className="shadowName" data-aos='fade-down'>Skills</h1>
                <p className="skill-summury" data-aos='zoom-in'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <div className="progress-div">
                {
                    Progress_Sills.map((items, index) => (
                        <div className="progress-group" key={index} data-aos='fade-right'>
                            <div className="progress-div-wrapper-1">
                                <label htmlFor="file">{items.skill_name}</label>
                                <span>{`${items.progress_per}%`}</span>
                            </div>
                            <progress id="file" max="100" value={items.progress_per}>{items.progress_per}</progress>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills