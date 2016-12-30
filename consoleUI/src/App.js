import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      prompt: '',
      history: []
    }
  }

  handleCommandLineInput(e) {
    e.preventDefault();
    this.setState({history: this.state.history.concat([{type: 'prompt', data: this.state.prompt}])})
    console.log('here', this.state.prompt, this.state.history);

  }

  handleChange(e) {
    this.setState({prompt: e.target.value});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>ConsoleUI</h2>
        </div>
        <div>
          <form className="commandLine" onSubmit={(e) => this.handleCommandLineInput(e)}>
              <input type="text" onChange={(e) => this.handleChange(e)}></input>
          </form>
        </div>
        <p className="App-intro"></p>
      </div>
    );
  }
}

export default App;
