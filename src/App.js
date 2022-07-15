import React, { Component } from 'react';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Information from './components/Information';
import uniqid from 'uniqid';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',

      info: {},

      edId: uniqid(),
      edName: '',
      fieldofstudy: '',
      edStart: '',
      edEnd: '',

      schools: [],

      exId: uniqid(),
      exName: '',
      position: '',
      tasks: '',
      exStart: '',
      exEnd: '',

      experiences: [],

      isPreview: false,
    };
  };

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,            
    });
  };

  handleInformationSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    this.setState({
      info: { name, email, phone },

      name: '',
      email: '',
      phone: '',
    });
  };

  handleEducationSubmit = (e) => {
    e.preventDefault();
    const { edId: id, edName: name, fieldofstudy, edStart: start, edEnd: end } = this.state;
    this.setState({
       schools: this.state.schools.concat({ id, name, fieldofstudy, start, end }),

        edId: uniqid(),
        edName: '',
        fieldofstudy: '',
        edStart: '',
        edEnd: '',
    });
};

  handleExperienceSubmit = (e) => {
    e.preventDefault();
    const { exId: id, exName: name, position, tasks, exStart: start, exEnd: end } = this.state;

    this.setState({
        experiences: this.state.experiences.concat({ id, name, position, tasks, start, end }),
        exId: uniqid(),
        exName: '',
        position: '',
        tasks: '',
        exStart: '',
        exEnd: '',
    });
};

  render() {
    const { name, email, phone } = this.state;
    const information = { name, email, phone };

    const { exId, exName, position, tasks, exStart, exEnd } = this.state;
    const experience = { id: exId, name: exName, position, tasks, start: exStart, end: exEnd };

    const { edId, edName, fieldofstudy, edStart, edEnd } = this.state;
    const school = { id: edId, name: edName, fieldofstudy, start: edStart, end: edEnd };

    return (
      <div className="App">
        <h1 className='title'>CV Application</h1>
        <Information information={information}
                      handleChange={this.handleChange}
                      handleSubmit={this.handleInformationSubmit}/>
        <Education schools={this.state.schools}
                   school={school} 
                   handleChange={this.handleChange}
                   handleSubmit={this.handleEducationSubmit}/>
        <Experience experiences={this.state.experiences} 
                    experience={experience} 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleExperienceSubmit}/>
      </div>
    );
  };
}

export default App;
