import React from "react";

const DisplayExperiences = (props) => {
    const { experiences } = props;

    return (
        <ul>
            {experiences.map((experience) => {
                return (
                    <div>
                        <li key={experience.id}>
                            <div>{experience.name}</div>
                            <div>{experience.position}</div>
                            <div>{experience.tasks}</div>
                            <div>{experience.start}</div>
                            <div>{experience.end}</div>
                        </li>
                    </div>
                )})}
        </ul>
    );
};

export default DisplayExperiences;