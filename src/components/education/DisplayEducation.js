import React from "react";

const DisplayEducation = (props) => {
    const { schools } = props;

    return (
        <ul>
            {schools.map((school) => {
                return (
                    <div>
                        <li key={school.id}>
                        <p>{school.name}</p>
                        <p>{school.fieldofstudy}</p>
                        <p>{school.start}</p>
                        <p>{school.end}</p>
                        </li>
                    </div>
                )})}
        </ul>
    );
};

export default DisplayEducation;