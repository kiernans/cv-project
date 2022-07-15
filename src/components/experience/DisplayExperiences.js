import React from "react";

const DisplayExperiences = (props) => {
    const { experiences } = props;

    return (
        <ul>
            {experiences.map((experience) => {
                return (
                    <div>
                        <li key={experience.id}>
                            <p>{experience.name}</p>
                            <p>{experience.position}</p>
                            <p>{experience.tasks}</p>
                            <p>{experience.start}</p>
                            <p>{experience.end}</p>
                        </li>
                    </div>
                )})}
        </ul>
    );
};

export default DisplayExperiences;