import React from "react";

const DisplayEducation = (props) => {
    const { schools } = props;

    return (
        <div>
            {schools.map((school) => {
                return (
                    <div key={school.id}>
                        <h3>{school.name}</h3>
                        <p className="duration">{school.start} - {school.end}</p>
                        <p className="fieldofstudy">{school.fieldofstudy}</p>
                    </div>
                )})}
        </div>
    );
};

export default DisplayEducation;