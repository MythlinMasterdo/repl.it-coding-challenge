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
    var executedPrompt = eval(this.state.prompt);
    this.setState({history: this.state.history.concat([{type: 'prompt', data: "> " + this.state.prompt}, {type: 'output', data: executedPrompt}]),
    prompt: ''});
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
            {this.state.history.map((output, index) => (
              <p>{output.data}</p>
            ))}
        </div>
        <div>
          <form className="commandLine" onSubmit={(e) => this.handleCommandLineInput(e)}>
            <input type="text" placeholder="//Do Magic" onChange={(e) => this.handleChange(e)}></input>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
