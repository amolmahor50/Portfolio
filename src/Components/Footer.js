import { GrFormNextLink } from "react-icons/gr";
import { LuMapPin } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';


function Footer() {

    useEffect(() => {
        AOS.init({duration: 1500});
    },[]);

    return (
        <>
            <div className="footer-container" id="footer">
                <div className="footer-wrapper first">
                    <h3 className="footer-info-name" data-aos='fade-down'>About</h3>
                    <p className="link-type" data-aos='fade-right'> I'm a front end developer with Two years of experience in web development.  I've worked on a variety of projects for clients in the retail, travel, and healthcare industries.</p>
                </div>
                <div className="footer-wrapper">
                    <h3 className="footer-info-name" data-aos='fade-down'>Links</h3>
                    <div className="footer-links">
                        <a href="#home" className="link" data-aos='fade-right'>
                            <GrFormNextLink className="icon" />
                            <p className="link-type">Home</p>
                        </a>
                        <a href="#about" className="link" data-aos='fade-right'>
                            <GrFormNextLink className="icon" />
                            <p className="link-type">About</p>
                        </a>
                        <a href="#service" className="link" data-aos='fade-right'>
                            <GrFormNextLink className="icon" />
                            <p className="link-type">Service</p>
                        </a>
                        <a href="#project" className="link" data-aos='fade-right'>
                            <GrFormNextLink className="icon" />
                            <p className="link-type">Project</p>
                        </a>
                        <a href="#contact" className="link" data-aos='fade-right'>
                            <GrFormNextLink className="icon" />
                            <p className="link-type">Contact</p>
                        </a>
                    </div>
                </div>
                <div className="footer-wrapper">
                    <h3 className="footer-info-name" data-aos='fade-down'>Services</h3>
                    <div className="footer-links">
                        <a href="#web-design" className="link" data-aos='fade-left'>
                            <GrFormNextLink className="icon" />
                            <p className="link-type">Web design</p>
                        </a>
                        <a href="#web-dev" className="link" data-aos='fade-left'>
                            <GrFormNextLink className="icon" />
                            <p className="link-type">Web Development</p>
                        </a>
                        <a href="#ui-design" className="link" data-aos='fade-left'>
                            <GrFormNextLink className="icon" />
                            <p className="link-type">UI/UX design</p>
                        </a>
                        <a href="#branding" className="link" data-aos='fade-left'>
                            <GrFormNextLink className="icon" />
                            <p className="link-type">Branding</p>
                        </a>
                        <a href="#app-dev" className="link" data-aos='fade-left'>
                            <GrFormNextLink className="icon" />
                            <p className="link-type">App Development</p>
                        </a>
                        <a href="#soft-dev" className="link" data-aos='fade-left'>
                            <GrFormNextLink className="icon" />
                            <p className="link-type">Software Development</p>
                        </a>
                    </div>
                </div>
                <div className="footer-wrapper">
                    <h3 className="footer-info-name" data-aos='fade-down'>Have a Quetions?</h3>
                    <div className="footer-links">
                        <div className="connect-me" data-aos='fade-left'>
                            <div className="connect-icon"><LuMapPin /></div>
                            <p className="connect-title">102, Bhoir Apartment Dange Chowk, Pune</p>
                        </div>
                        <div className="connect-me" data-aos='fade-left'>
                            <div className="connect-icon"><IoCallOutline /></div>
                            <p className="connect-title">+91 9673170912</p>
                        </div>
                        <div className="connect-me" data-aos='fade-left'>
                            <div className="connect-icon"><MdOutlineAttachEmail /></div>
                            <p className="connect-title">amolmahor50@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="icon-wrapper-div">
                <a data-aos='fade-up' href="https://github.com/amolmahor50/"><FaGithub /></a>
                <a data-aos='fade-up' href="https://www.facebook.com/amolmahor50?mibextid=ZbWKwL"><FaFacebookF /></a>
                <a data-aos='fade-up' href="https://instagram.com/_aesthetic.amol?igshid=NzZlODBkYWE4Ng=="><FaInstagram /></a>
            </div>
            <p className="copyright-text" data-aos='zoom-in'>Copyright @2024 All right reserved | This templete with made is Amol</p>
        </>
    )
}

export default Footer;