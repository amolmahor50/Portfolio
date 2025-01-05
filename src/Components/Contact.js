import SelfImg from '../Assets/home.jpg';
import {DetailsData} from '../Data/Data';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const formData = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm('service_09csuev', 'template_a9rmwnq', formData.current, {
          publicKey: 'b_bdk_Oe3A3NVrWAv',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            formData.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

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
                <form data-aos='fade-up' ref={formData} onSubmit={sendEmail}>
                    <div className="form-group">
                        <input type="text" name="from_name" placeholder="Your Name" data-aos='fade-right'/>
                        <input type="email" name="from_email" placeholder="Your Email" data-aos='fade-right'/>
                        <input type="text" name="sub_massage" placeholder="Your massage" data-aos='fade-right'/>
                        <textarea placeholder="Massage" name="message" rows={10} data-aos='fade-right'/>
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