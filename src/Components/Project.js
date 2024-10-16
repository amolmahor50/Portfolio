import { FaLink } from "react-icons/fa6";
import {projectSummury} from '../Data/Data'

function Project() {

  return (
    <div className="project-container" id="project">
      <div className='headline-content'>
        <h1>Our Projects</h1>
        <h1 className="shadowName">Projects</h1>
        <p className="project-summury">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
      </div>
      <div className='card-group'>
        {
          projectSummury.map((data, index) => (
            <article className="project-card" key={index}>
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