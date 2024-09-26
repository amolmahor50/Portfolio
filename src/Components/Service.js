import { GrAppsRounded } from "react-icons/gr";
import { SiSimilarweb } from "react-icons/si";
import { LiaConnectdevelop } from "react-icons/lia";
import { FaQuinscape } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import { SiBmcsoftware } from "react-icons/si";


function Service() {
    const serviceMenu = [
        {
            icon: <SiSimilarweb />,
            service_name: "web design",
        },
        {
            icon: <LiaConnectdevelop />,
            service_name: "web developer",
        },
        {
            icon: <FaQuinscape />,
            service_name: "UI/UX Design",
        },
        {
            icon: <GrAppsRounded />,
            service_name: "branding",
        },
        {
            icon: <FaAppStore />,
            service_name: "App Developement",
        },
        {
            icon: <SiBmcsoftware />,
            service_name: "software Developement",
        }
    ]
    return (
        <div className='service-container'>
            <div className="headline-content">
                <h1>Service</h1>
                <h1 className='shadowName'>Service</h1>
                <p className='service-summury'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <div className='service-card'>
                {serviceMenu.map((item, index) => (
                    <div className='card' key={index}>
                        <p className="service-icon">{item.icon}</p>
                        <p className="service-name">{item.service_name}</p>
                        <span></span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Service