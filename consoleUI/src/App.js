import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      prompt: '',
      history: [],
      consoleHistory: []
    }
  }

  handleCommandLineInput(e) {
    e.preventDefault();
    var executedPrompt = eval(this.state.prompt);
    this.setState({history: this.state.history.concat([{type: 'prompt', data: this.state.prompt}, {type: 'output', data: executedPrompt}]),
    prompt: ''});
  }

  handleChange(e) {
    this.setState({prompt: e.target.value});
  }

  populateConsole(e) {
    this.state.history.forEach(function(output) {
      this.state.consoleHistory.push(
        output.data
      );
    }.bind(this))
    console.log(this.state.consoleHistory);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>ConsoleUI</h2>
        </div>
        <div>
          <p onClick={(e) => this.populateConsole(e)}>here</p>
        </div>
        <div>
          {this.state.consoleHistory}
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
