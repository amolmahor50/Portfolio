import { MdOutlineMessage } from "react-icons/md";
import Skeleton from '../Assets/nature.jpg';
import {BlogSummury, BlogsCard} from '../Data/Data';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Blogs() {

    useEffect(() => {
        AOS.init({duration: 1500});
    },[]);

    return (
        <div className="blogs-container" id="blogs">
            <div className="headline-content">
                <h1 data-aos='fade-down'>Our Blog</h1>
                <h1 className="shadowName" data-aos='fade-down'>Blogs</h1>
                <p className="blogs-summury" data-aos='zoom-in'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <div className="blogs-cards">
                {
                    BlogSummury.map((item, index) => (
                        <div className="blogs-card-group" key={index}>
                            <div className="card-img" data-aos='fade-down'>
                                <img src={item.img} />
                            </div>
                            <div className="card-content">
                                <div className="card-content-wrapper-1" data-aos='fade-right'>
                                    <p>{item.date}</p>
                                    <p>{item.profession}</p>
                                    <p className="msg-icon">
                                        <MdOutlineMessage />
                                        <span>{item.commentCount}</span>
                                    </p>
                                </div>
                                <h5 data-aos='fade-right' className="blogs-title">{item.title}</h5>
                                <p data-aos='fade-right' className="blogs-subtitle">{item.subtitle}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="skeleton-content">
                <div className="skeleton-cards">
                    {
                        BlogsCard.map((items, index) => (
                            <div className="card-group" key={index} data-aos='fade-up'>
                                <h1 className="counter">{items.couter}</h1>
                                <p>{items.title}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="skeleton-img">
                    <img src={Skeleton} />
                    <div className="skeleton-wrapper">
                        <h4  data-aos='fade-up'>I'm <span>Available</span> for freelancing</h4>
                        <p data-aos='fade-ip'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <button data-aos='zoom-in'>hire me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs