import React from "react";
import DisplayEducation from "./education/DisplayEducation";
import DisplayExperiences from "./experience/DisplayExperiences";
import "../styles/Resume.css";
const Resume = (props) => {

    const { name, phone, email} = props.information;
    return (
        <div className="Resume">
            <div className="header">
                <h1>{name}</h1>
                <p>{phone}&nbsp;&nbsp;&nbsp;&nbsp;{email}</p>
            </div>
            <div className="education">
                <h2>Education</h2>
                <DisplayEducation schools={props.schools} />
            </div>
            <div className="experience">
                <h2>Work Experience</h2>
                <DisplayExperiences experiences={props.experiences} />
            </div>
        </div>
    );
};

export default Resume;