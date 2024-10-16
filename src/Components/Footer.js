import { GrFormNextLink } from "react-icons/gr";
import { LuMapPin } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";


function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="footer-wrapper first">
                    <h3 className="footer-info-name">About</h3>
                    <p className="link-type">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="footer-wrapper">
                    <h3 className="footer-info-name">Links</h3>
                    <div className="footer-links">
                        <div className="link">
                            <GrFormNextLink className="icon" />
                            <p className="link-type">Home</p>
                        </div>
                        <div className="link">
                            <GrFormNextLink className="icon" />
                            <p className="link-type">About</p>
                        </div>
                        <div className="link">
                            <GrFormNextLink className="icon" />
                            <p className="link-type">Service</p>
                        </div>
                        <div className="link">
                            <GrFormNextLink className="icon" />
                            <p className="link-type">Project</p>
                        </div>
                        <div className="link">
                            <GrFormNextLink className="icon" />
                            <p className="link-type">Contact</p>
                        </div>
                    </div>
                </div>
                <div className="footer-wrapper">
                    <h3 className="footer-info-name">Services</h3>
                    <div className="footer-links">
                        <div className="link">
                            <GrFormNextLink className="icon" />
                            <p className="link-type">Web design</p>
                        </div>
                        <div className="link">
                            <GrFormNextLink className="icon" />
                            <p className="link-type">Web Development</p>
                        </div>
                        <div className="link">
                            <GrFormNextLink className="icon" />
                            <p className="link-type">UI/UX design</p>
                        </div>
                        <div className="link">
                            <GrFormNextLink className="icon" />
                            <p className="link-type">Branding</p>
                        </div>
                        <div className="link">
                            <GrFormNextLink className="icon" />
                            <p className="link-type">App Development</p>
                        </div>
                        <div className="link">
                            <GrFormNextLink className="icon" />
                            <p className="link-type">Software Development</p>
                        </div>
                    </div>
                </div>
                <div className="footer-wrapper">
                    <h3 className="footer-info-name">Have a Quetions?</h3>
                    <div className="footer-links">
                        <div className="connect-me">
                            <div className="connect-icon"><LuMapPin /></div>
                            <p className="connect-title">102, Bhoir Apartment Dange Chowk, Pune</p>
                        </div>
                        <div className="connect-me">
                            <div className="connect-icon"><IoCallOutline /></div>
                            <p className="connect-title">+91 9673170912</p>
                        </div>
                        <div className="connect-me">
                            <div className="connect-icon"><MdOutlineAttachEmail /></div>
                            <p className="connect-title">amolmahor50@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="icon-wrapper-div">
                <a href="https://instagram.com/_aesthetic.amol?igshid=NzZlODBkYWE4Ng=="><FaTwitter /></a>
                <a href="https://www.facebook.com/amolmahor50?mibextid=ZbWKwL"><FaFacebookF /></a>
                <a href="https://instagram.com/_aesthetic.amol?igshid=NzZlODBkYWE4Ng=="><FaInstagram /></a>
            </div>
            <p className="copyright-text">Copyright @2024 All right reserved | This templete with made is Amol</p>
        </>
    )
}

export default Footer;