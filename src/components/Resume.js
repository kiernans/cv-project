import React, { Component } from "react";
import DisplayEducation from "./education/DisplayEducation";
import DisplayExperiences from "./experience/DisplayExperiences";
import "../styles/Resume.css";
class Resume extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { name, phone, email} = this.props.information;
        return (
            <div className="Resume">
                <div className="header">
                    <h1>{name}</h1>
                    <p>{phone}&nbsp;&nbsp;&nbsp;&nbsp;{email}</p>
                </div>
                <div className="education">
                    <h2>Education</h2>
                    <DisplayEducation schools={this.props.schools} />
                </div>
                <div className="experience">
                    <h2>Work Experience</h2>
                    <DisplayExperiences experiences={this.props.experiences} />
                </div>
            </div>
        );
    };
};

export default Resume;