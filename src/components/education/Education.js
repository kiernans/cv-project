import React, { Component } from "react";
import "../../styles/Education.css"

class Education extends Component {
    constructor(props) {
        super(props);
    };

    handleChange = (e) => {
        this.props.handleChange(e);
    };

    handleSubmit = (e) => {
        this.props.handleSubmit(e);
    };

    render() {
        const { name, fieldofstudy, start, end } = this.props.school;
        const today = new Date().toISOString().slice(0, 10)

        return (
            <div className="Education">
                <h2>Education</h2>
                <form>
                    <label>School Name</label>
                    <input
                    onChange={this.handleChange}
                    name='edName' 
                    value={name}
                    type='text'
                    id='nameInput'
                    />

                    <label>Field of Study</label>
                    <input
                    onChange={this.handleChange}
                    name='fieldofstudy' 
                    value={fieldofstudy}
                    type='text'
                    id='fieldOfStudyInput'
                    />

                    <label>Start:</label>
                    <input
                    onChange={this.handleChange}
                    name='edStart' 
                    value={start}
                    type='date'
                    id='startInput'
                    min="2000-01-01"
                    max={today}
                    />

                    <label>End:</label>
                    <input
                    onChange={this.handleChange}
                    name='edEnd' 
                    value={end}
                    type='date'
                    id='endInput'
                    min="2000-01-01"
                    max={today}
                    />
                </form>
                <button onClick={this.handleSubmit}>Save</button>
            </div>
        );
    };
};



export default Education;