import { GrAppsRounded } from "react-icons/gr";
import { SiSimilarweb } from "react-icons/si";
import { LiaConnectdevelop } from "react-icons/lia";
import { FaQuinscape } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import { SiBmcsoftware } from "react-icons/si";
import { NavLink } from "react-bootstrap";


function Service() {
    return (
        <div className='service-container' id="service">
            <div className="headline-content">
                <h1>Service</h1>
                <h1 className='shadowName'>Service</h1>
                <p className='service-summury'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <div className='service-card'>
                <NavLink id="web-design" href="https://www.simplilearn.com/what-is-web-designing-article" className='card'>
                    <p className="service-icon"><SiSimilarweb/></p>
                    <p className="service-name">web design</p>
                    <span></span>
                </NavLink>
                <NavLink id="web-dev" href="https://www.simplilearn.com/how-to-become-complete-web-development-professional-article" className='card'>
                    <p className="service-icon"><LiaConnectdevelop/></p>
                    <p className="service-name">web development</p>
                    <span></span>
                </NavLink>
                <NavLink id="ui-design" href="https://www.simplilearn.com/ui-ux-certification-training-course" className='card'>
                    <p className="service-icon"><FaQuinscape/></p>
                    <p className="service-name">UI/UX Design</p>
                    <span></span>
                </NavLink>
                <NavLink id="branding" href="https://www.simplilearn.com/benefits-of-branding-article" className='card'>
                    <p className="service-icon"><GrAppsRounded/></p>
                    <p className="service-name">branding</p>
                    <span></span>
                </NavLink>
                <NavLink id="app-dev" href="https://www.simplilearn.com/building-career-in-mobile-app-development-article" className='card'>
                    <p className="service-icon"><FaAppStore/></p>
                    <p className="service-name">App Developement</p>
                    <span></span>
                </NavLink>
                <NavLink id="soft-dev" href="https://www.simplilearn.com/tutorials/programming-tutorial/what-is-software-development" className='card'>
                    <p className="service-icon"><SiBmcsoftware/></p>
                    <p className="service-name">Software Developement</p>
                    <span></span>
                </NavLink>
            </div>
        </div>
    )
}

export default Service