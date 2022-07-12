import React from "react";

const DisplayEducation = (props) => {
    const { schools } = props;

    return (
        <ul>
            {schools.map((school) => {
                return (
                    <div>
                        <li key={school.id}>
                        {school.name}
                        </li>
                        <li key={school.id}>
                        {school.fieldofstudy}
                        </li>
                        <li key={school.id}>
                        {school.start}
                        </li>
                        <li key={school.id}>
                        {school.end}
                        </li>
                    </div>
                )})}
        </ul>
    );
};

export default DisplayEducation;