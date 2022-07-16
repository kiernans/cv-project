import React, { useState } from 'react';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Information from './components/Information';
import Resume from './components/Resume';
import uniqid from 'uniqid';
import './styles/App.css';

const App = () => {

  const [info, setInfo] = 
    useState({
      name: '',
      email: '',
      phone: ''
    });

  const [school, setSchool] = 
    useState({
      id: uniqid(),
      name: '',
      fieldofstudy: '',
      start: '',
      end: ''
    });

  const [schools, setSchools] = useState([]);

  const [experience, setExperience] = 
    useState({
      id: uniqid(),
      name: '',
      position: '',
      tasks: '',
      start: '',
      end: ''
    });
  const [experiences, setExperiences] = useState([]);

  const [isPreview, setIsPreview] = useState(false);

  const handleInfoChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleEducationChange = (e) => {
    setSchool({ ...school, [e.target.name]: e.target.value });
  };

  const handleExperienceChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };
  
  const handleInfoSubmit = (e) => {
    e.preventDefault();

  };

  const handleEducationSubmit = (e) => {
    e.preventDefault();
    setSchools(schools.concat(school));
    setSchool({
      id: uniqid(),
      name: '',
      fieldofstudy: '',
      start: '',
      end: ''
    });
  };

  const handleExperienceSubmit = (e) => {
    e.preventDefault();
    setExperiences(experiences.concat(experience));

    setExperience({
      id: uniqid(),
      name: '',
      position: '',
      tasks: '',
      start: '',
      end: ''
    });
  };  

  const handlePreviewClicked = (e) => {
      e.preventDefault();
      setIsPreview(!isPreview);
    };

    return (
      <div className="App">
        <h1 className='title'>CV Application</h1>
        {!isPreview && 
            <div>
              <Information information={info}
                            handleChange={handleInfoChange}
                            handleSubmit={handleInfoSubmit}/>
              <Education schools={schools}
                          school={school} 
                          handleChange={handleEducationChange}
                          handleSubmit={handleEducationSubmit}/>
              <Experience experiences={experiences} 
                          experience={experience} 
                          handleChange={handleExperienceChange} 
                          handleSubmit={handleExperienceSubmit}/>
            </div>
        }

        {isPreview && 
            <Resume information={info}
                    schools={schools}
                    experiences={experiences}
                    />
        }
        <button className='Preview' onClick={handlePreviewClicked}>Preview</button>
      </div>
    );
  };

export default App;
