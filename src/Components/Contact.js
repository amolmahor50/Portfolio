import { FaRegAddressCard } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { TiWorld } from "react-icons/ti";
import SelfImg from '../Assets/home.jpg';

function Contact() {

    const DetailsData = [
        {
            icon: <FaRegAddressCard />,
            title: "Address",
            subTitle: "102, Bhoir Apartment, Dange Chowk, Pune"
        },
        {
            icon: <IoCallOutline />,
            title: "conatct number",
            subTitle: "+91 9673170912"
        },
        {
            icon: <AiOutlineMail />,
            title: "email address",
            subTitle: "amolmahor50@gmail.com"
        },
        {
            icon: <TiWorld />,
            title: "website",
            subTitle: "yoursite.com"
        },
    ]
    return (
        <div className="conatct-container">
            <div className="headline-content">
                <h1>Contact Me</h1>
                <h1 className="shadowName">Conatct</h1>
                <p className="conatct-summury">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <div className="contact-group">
                {
                    DetailsData.map((items, index) => (
                        <div className="contact-info" key={index}>
                            <p className="icon">{items.icon}</p>
                            <p className="title">{items.title}</p>
                            <p className="subtitle">{items.subTitle}</p>
                        </div>
                    ))
                }
            </div>
            <div className="contact-form">
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <input type="text" placeholder="Subject" />
                        <textarea placeholder="Massage" rows={10}></textarea>
                        <button type="submit">send massage</button>
                    </div>
                </form>
                <div className="self-img" >
                    <img src={SelfImg} />
                </div>
            </div>
        </div>
    )
}

export default Contact