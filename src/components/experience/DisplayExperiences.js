import React from "react";

const DisplayExperiences = (props) => {
    const { experiences } = props;

    return (
        <div>
            {experiences.map((experience) => {
                return (
                    <div key={experience.id}>
                            <h3>{experience.name}</h3>
                            <p className="duration">{experience.start} - {experience.end}</p>
                            <p>{experience.position}</p>
                            <p className="tasks">{experience.tasks}</p>
                    </div>
                )})}
        </div>
            
    );
};

export default DisplayExperiences;