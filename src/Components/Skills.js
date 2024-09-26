
function Skills() {
    const Progress_Sills = [
        {
            skill_name: "HTML5",
            progress_per: "95",
        },
        {
            skill_name: "CSS",
            progress_per: "80",
        },
        {
            skill_name: "BootStrap",
            progress_per: "60",
        },
        {
            skill_name: "TailWind CSS",
            progress_per: "50",
        },
        {
            skill_name: "Git",
            progress_per: "80",
        },
        {
            skill_name: "GitHub",
            progress_per: "85",
        },
        {
            skill_name: "JavaScript",
            progress_per: "80",
        },
        {
            skill_name: "Java",
            progress_per: "60",
        },
        {
            skill_name: "ReactJs",
            progress_per: "75",
        },
        {
            skill_name: "Redux",
            progress_per: "50",
        },
    ]
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