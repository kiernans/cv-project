import React from "react";
import "../../styles/Experience.css"

const Experience = (props) => {

    const handleChange = (e) => {
        props.handleChange(e);
    };

    const handleSubmit = (e) => {
        props.handleSubmit(e);
    };
    
    const { name, position, tasks, start, end } = props;
    const today = new Date().toISOString().slice(0, 10)

    return (
        <div className="Experience">
            <h2>Work Experience</h2>
            <form>
                <label>Company Name</label>
                <input
                onChange={handleChange}
                name='name'
                value={name}
                type='text'
                id='nameInput'
                />

                <label>Position Title</label>
                <input
                onChange={handleChange} 
                name='position'
                value={position}
                type='text'
                id='positionInput'
                />

                <label>Main Tasks</label>
                <textarea
                onChange={handleChange} 
                name='tasks'
                value={tasks}
                type='text'
                id='tasksInput'
                />

                <label>Start:</label>
                <input
                onChange={handleChange} 
                name='start'
                value={start}
                type='date'
                id='startInput'
                min="2000-01-01"
                max={today}
                />

                <label>End:</label>
                <input
                onChange={handleChange} 
                name='end'
                value={end}
                type='date'
                id='endInput'
                min="2000-01-01"
                max={today}
                />
            </form>
            <button onClick={handleSubmit}>Save</button>
        </div>
    );
};

export default Experience;