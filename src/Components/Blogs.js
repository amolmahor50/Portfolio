import { MdOutlineMessage } from "react-icons/md";
import Skeleton from '../Assets/nature.jpg';
import {BlogSummury, BlogsCard} from '../Data/Data'

function Blogs() {

    return (
        <div className="blogs-container">
            <div className="headline-content">
                <h1>Our Blog</h1>
                <h1 className="shadowName">Blogs</h1>
                <p className="blogs-summury">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <div className="blogs-cards">
                {
                    BlogSummury.map((item, index) => (
                        <div className="blogs-card-group" key={index}>
                            <div className="card-img">
                                <img src={item.img} />
                            </div>
                            <div className="card-content">
                                <div className="card-content-wrapper-1">
                                    <p>{item.date}</p>
                                    <p>{item.profession}</p>
                                    <p className="msg-icon">
                                        <MdOutlineMessage />
                                        <span>{item.commentCount}</span>
                                    </p>
                                </div>
                                <h5 className="blogs-title">{item.title}</h5>
                                <p className="blogs-subtitle">{item.subtitle}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="skeleton-content">
                <div className="skeleton-cards">
                    {
                        BlogsCard.map((items, index) => (
                            <div className="card-group" key={index}>
                                <h1 className="counter">{items.couter}</h1>
                                <p>{items.title}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="skeleton-img">
                    <img src={Skeleton} />
                    <div className="skeleton-wrapper">
                        <h4>I'm <span>Available</span> for freelancing</h4>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <button>hire me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs