import React, { Component } from "react";
import uniqid from 'uniqid';
import DisplayEducation from "./DisplayEducation";
import "../../styles/Education.css"

class Education extends Component {
    constructor() {
        super();
        
        this.state = {
            id: uniqid(),
            name: '',
            fieldofstudy: '',
            start: '',
            end: '',
            
            schools: [],

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { id, name, fieldofstudy, start, end } = this.state;
        this.setState({
           schools: this.state.schools.concat({ id, name, fieldofstudy, start, end }),

            id: uniqid(),
            name: '',
            fieldofstudy: '',
            start: '',
            end: '',
        });
    };

    render() {
        const { schools, name, fieldofstudy, start, end } = this.state;
        const today = new Date().toISOString().slice(0, 10)

        return (
            <div className="Education">
                <h2>Education</h2>
                <form>
                    <label>School Name</label>
                    <input
                    onChange={this.handleChange}
                    name='name' 
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
                    name='start' 
                    value={start}
                    type='date'
                    id='startInput'
                    min="2000-01-01"
                    max={today}
                    />

                    <label>End:</label>
                    <input
                    onChange={this.handleChange}
                    name='end' 
                    value={end}
                    type='date'
                    id='endInput'
                    min="2000-01-01"
                    max={today}
                    />
                </form>
                <button onClick={this.handleSubmit}>Save</button>
                
                <DisplayEducation schools={schools}/>

            </div>
        );
    };
};



export default Education;