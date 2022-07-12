import React, { Component } from "react";
import uniqid from 'uniqid';
import DisplayEducation from "./DisplayEducation";

class Education extends Component {
    constructor() {
        super();
        
        this.state = {
            name: '',
            fieldofstudy: '',
            start: '',
            end: '',
            
            school: {
                id: uniqid(),
                name: '',
                fieldofstudy: '',
                start: '',
                end: '',
            },

            schools: [],

        };
    };

    handleChange = (e) => {
        if(e.target.id === 'nameInput') {
            this.setState({
                name: e.target.value, 
            });
        } else if(e.target.id === 'fieldOfStudyInput') {
            this.setState({
                fieldofstudy: e.target.value, 
            });
        } else if(e.target.id === 'startInput') {
            this.setState({
                start: e.target.value, 
            });
        } else {
            this.setState({
                end: e.target.value, 
            });
        }
        
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            school: {
                id: uniqid(),
                name: this.state.name,
                fieldofstudy: this.state.fieldofstudy,
                start: this.state.start,
                end: this.state.end,
            },

            schools: this.state.schools.concat(this.state.school),

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
            <div>
                <form>
                    <label>School Name</label>
                    <input
                    onChange={this.handleChange} 
                    value={name}
                    type='text'
                    id='nameInput'
                    />

                    <label>Field of Study</label>
                    <input
                    onChange={this.handleChange} 
                    value={fieldofstudy}
                    type='text'
                    id='fieldOfStudyInput'
                    />

                    <label>Start:</label>
                    <input
                    onChange={this.handleChange} 
                    value={start}
                    type='date'
                    id='startInput'
                    min="2000-01-01"
                    max={today}
                    />

                    <label>End:</label>
                    <input
                    onChange={this.handleChange} 
                    value={end}
                    type='date'
                    id='endInput'
                    min="2000-01-01"
                    max={today}
                    />
                </form>
                <button onClick={this.handleSubmit}>Submit</button>
                
                <DisplayEducation schools={schools}/>

            </div>
        );
    };
};



export default Education;