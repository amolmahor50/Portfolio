import SelfImg from '../Assets/home.jpg';
import {DetailsData} from '../Data/Data';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Contact() {

    useEffect(() => {
        AOS.init({duration: 1500});
    },[]);

    return (
        <div className="conatct-container" id='contact'>
            <div className="headline-content">
                <h1 data-aos='fade-down'>Contact Me</h1>
                <h1 data-aos='fade-down' className="shadowName">Conatct</h1>
                <p className="conatct-summury" data-aos='zoom-in'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <div className="contact-group">
                {
                    DetailsData.map((items, index) => (
                        <div className="contact-info" key={index}>
                            <p className="icon" data-aos='fade-down'>{items.icon}</p>
                            <p className="title" data-aos='fade-right'>{items.title}</p>
                            <p className="subtitle" data-aos='fade-right'>{items.subTitle}</p>
                        </div>
                    ))
                }
            </div>
            <div className="contact-form">
                <form data-aos='fade-up'>
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" data-aos='fade-right'/>
                        <input type="email" placeholder="Your Email" data-aos='fade-right'/>
                        <input type="text" placeholder="Subject" data-aos='fade-right'/>
                        <textarea placeholder="Massage" rows={10} data-aos='fade-right'></textarea>
                        <button type="submit" data-aos='zoom-in'>send massage</button>
                    </div>
                </form>
                <div className="self-img" data-aos='fade-down'>
                    <img src={SelfImg} />
                </div>
            </div>
        </div>
    )
}

export default Contact