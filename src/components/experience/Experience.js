import React, { Component } from "react";
import "../../styles/Experience.css"

class Experience extends Component {
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
        const { name, position, tasks, start, end } = this.props.experience;
        const today = new Date().toISOString().slice(0, 10)

        return (
            <div className="Experience">
                <h2>Work Experience</h2>
                <form>
                    <label>Company Name</label>
                    <input
                    onChange={this.handleChange}
                    name='exName'
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
                    name='exStart'
                    value={start}
                    type='date'
                    id='startInput'
                    min="2000-01-01"
                    max={today}
                    />

                    <label>End:</label>
                    <input
                    onChange={this.handleChange} 
                    name='exEnd'
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



export default Experience;