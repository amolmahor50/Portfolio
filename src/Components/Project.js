import { FaLink } from "react-icons/fa6";
import {projectSummury} from '../Data/Data';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Project() {

  useEffect(() => {
    AOS.init({duration: 1500});
},[]);

  return (
    <div className="project-container" id="project">
      <div className='headline-content'>
        <h1 data-aos='fade-down'>Our Projects</h1>
        <h1 className="shadowName" data-aos='fade-down'>Projects</h1>
        <p className="project-summury" data-aos='zoom-in'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
      </div>
      <div className='card-group'>
        {
          projectSummury.length> 0 && projectSummury.map((data, index) => (
            <article className="project-card" key={index} data-aos='zoom-in'>
              <img src={data.img} alt="" className="prject img" />
              <div className="project-modal">
                <div className='project-group'>
                  <span className="project-subtitle">{data.subtitle}</span>
                  <h3 className="project-title">{data.title}</h3>
                  <a href={data.link} className="project-button"><FaLink /></a>
                </div>
              </div>
            </article>
          ))
        }
      </div>
    </div>
  )
}

export default Project