import {resumeDetails} from "../Data/Data";

function Resume() {

    return (
        <div className='resume-container' id="resume">
            <div className='headline-content'>
                <h1>Resume</h1>
                <h1 className='shadowName'>Resume</h1>
                <p className='resume-summury'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>
            <div className='resume-card'>
                <div className='card'>
                    {resumeDetails.map((items, index) => (
                        <div className='card-group' key={index}>
                            <span className='year'>{items.year}</span>
                            <p className='degree'>{items.degeree}</p>
                            <p className='university'>{items.university_name}</p>
                            <p className='resume-comment'>{items.comment}</p>
                        </div>
                    ))}
                </div>
                <button className='cv-btn'>DOWNLOAD CV</button>
            </div>
        </div>
    )
}

export default Resume