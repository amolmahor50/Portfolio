import SelfImg from '../Assets/home.jpg';
import {DetailsData} from '../Data/Data'

function Contact() {

    return (
        <div className="conatct-container" id='contact'>
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