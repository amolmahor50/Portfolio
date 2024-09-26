import Todo from '../Assets/TodoManagement.jpg';
import TextUtils from '../Assets/TextUtils.jpg';
import BubbleGame from '../Assets/BubbleGame.jpg';
import TechnoSignia from '../Assets/WebPage.jpg';
import FlipkartClone from '../Assets/Flipkart.jpg';
import TriveniWebPage from '../Assets/BeautyHub.jpg';
import CabService from '../Assets/Taxi.jpg';
import Calculator from '../Assets/Calculator.jpg';
import Portfolio from '../Assets/Portfolio.jpg';

import { FaLink } from "react-icons/fa6";
import { useEffect } from 'react';

function Project() {

  const projectSummury = [
    {
      img: Todo,
      subtitle: "Todo Mangement",
      title: "Software Appliaction",
      link: "https://github.com/amolmahor50/TodoManagement.git"
    },
    {
      img: TextUtils,
      subtitle: "TextUtils App",
      title: "Aplication Building",
      link: "https://github.com/amolmahor50/Text-Utils-App.git"
    },
    {
      img: BubbleGame,
      subtitle: "Bubble Game",
      title: "Play Game",
      link: "https://github.com/amolmahor50/Bubble-Game.git"
    },
    {
      img: TechnoSignia,
      subtitle: "TechnoSignia WebPage",
      title: "web design",
      link: "https://github.com/amolmahor50/TechnoSignia-Software-training-Institute.git"
    },
    {
      img: FlipkartClone,
      subtitle: "Flipkart clone",
      title: "web design",
      link: "https://github.com/amolmahor50/flipkard-shopping-app-clone.git"
    },
    {
      img: TriveniWebPage,
      subtitle: "Triveni BeautyHub Website",
      title: "web design",
      link: "https://github.com/amolmahor50/TriveniBeautyHub.git"
    },
    {
      img: CabService,
      subtitle: "cab booking service",
      title: "Front-end UI/UX",
      link: "https://github.com/amolmahor50/cab-booking-app.git"
    },
    {
      img: Calculator,
      subtitle: "Birthday Calculator",
      title: "Mobile Appliaction",
      link: "https://github.com/amolmahor50/Birthday-Calculator.git"
    },
    {
      img: Portfolio,
      subtitle: "Potfolio",
      title: "Front-end UI/UX",
      link: "https://github.com/amolmahor50/cab-booking-app.git"
    }
  ]

  useEffect(() => { }, [projectSummury])

  return (
    <div className="project-container">
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