import React from "react";
import "../../styles/Education.css"

const Education = (props) => {    

    const handleChange = (e) => {
        props.handleChange(e);
    };

    const handleSubmit = (e) => {
        props.handleSubmit(e);
    };

    const { name, fieldofstudy, start, end } = props;
    const today = new Date().toISOString().slice(0, 10)

    return (
        <div className="Education">
            <h2>Education</h2>
            <form>
                <label>School Name</label>
                <input
                onChange={handleChange}
                name='name' 
                value={name}
                type='text'
                id='nameInput'
                />

                <label>Field of Study</label>
                <input
                onChange={handleChange}
                name='fieldofstudy' 
                value={fieldofstudy}
                type='text'
                id='fieldOfStudyInput'
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

export default Education;