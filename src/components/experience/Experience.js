import React, { Component } from "react";
import uniqid from 'uniqid';
import DisplayExperiences from "./DisplayExperiences";

class Experience extends Component {
    constructor() {
        super();
        
        this.state = {  
            id: uniqid(),
            name: '',
            position: '',
            tasks: '',
            start: '',
            end: '',

            experiences: [],
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
        const { id, name, position, tasks, start, end } = this.state;

        this.setState({
            experiences: this.state.experiences.concat({ id, name, position, tasks, start, end }),
            id: uniqid(),
            name: '',
            position: '',
            tasks: '',
            start: '',
            end: '',
        });
    };

    render() {
        const { experiences, name, position, tasks, start, end } = this.state;
        const today = new Date().toISOString().slice(0, 10)

        return (
            <div>
                <form>
                    <label>Company Name</label>
                    <input
                    onChange={this.handleChange}
                    name='name' 
                    value={name}
                    type='text'
                    id='nameInput'
                    />

                    <label>Position Title</label>
                    <input
                    onChange={this.handleChange} 
                    name='position'
                    value={position}
                    type='text'
                    id='positionInput'
                    />

                    <label>Main Tasks</label>
                    <textarea
                    onChange={this.handleChange} 
                    name='tasks'
                    value={tasks}
                    type='text'
                    id='tasksInput'
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
                <button onClick={this.handleSubmit}>Submit</button>
                
                <DisplayExperiences experiences={experiences}/>

            </div>
        );
    };
};



export default Experience;