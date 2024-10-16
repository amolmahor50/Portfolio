import {Progress_Sills} from '../Data/Data';

function Skills() {

    return (
        <div className="skill-container">
            <div className="headline-content">
                <h1>My Skills</h1>
                <h1 className="shadowName">Skills</h1>
                <p className="skill-summury">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <div className="progress-div">
                {
                    Progress_Sills.map((items, index) => (
                        <div className="progress-group" key={index}>
                            <div className="progress-div-wrapper-1">
                                <label htmlFor="file">{items.skill_name}</label>
                                <span>{`${items.progress_per}%`}</span>
                            </div>
                            <progress id="file" max="100" value={items.progress_per}>{items.progress_per}</progress>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills