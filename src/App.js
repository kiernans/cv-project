import React, { Component } from 'react';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Information from './components/Information';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <h1>CV Application</h1>
        <Information />
        <Education />
        <Experience />
      </div>
    );
  };
}

export default App;
