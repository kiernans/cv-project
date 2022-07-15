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
                <h1>{name}</h1>
                <p>{phone}</p>
                <p>{email}</p>
                <h2>Education</h2>
                <DisplayEducation schools={this.props.schools} />
                <h2>Work Experience</h2>
                <DisplayExperiences experiences={this.props.experiences} />
            </div>
            
        );
    };
};

export default Resume;