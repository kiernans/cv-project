import React, { Component } from 'react';
import Information from './components/Information';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <h1>CV Application</h1>
        <Information />
      </div>
    );
  };
}

export default App;
