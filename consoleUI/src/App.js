import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      prompt: '',
      history: [{type: 'prompt', data: "hello"}, {type: 'output', data: 4}]
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

  // populateConsole(e) {
  //   console.log('called');
  //   this.state.history.forEach(function(output) {
  //     if(output.type === "output") {
  //       return <p>{output.data}</p>
  //     } else {
  //       return <p> > {output.data}</p>
  //     }
  //   }.bind(this))
  // }

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
            <input type="text" onChange={(e) => this.handleChange(e)}></input>
          </form>
        </div>
        <p className="App-intro">{this.state.history[0].data}</p>
      </div>
    );
  }
}

export default App;
