import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      prompt: '',
      history: [],
      value: ''
    }
  }

  handleCommandLineInput(e) {
    e.preventDefault();
    var executedPrompt = eval(this.state.prompt);
    this.setState({history: this.state.history.concat([{type: 'prompt', data: "> " + this.state.prompt}, {type: 'output', data: executedPrompt}]),
    prompt: ''});
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({prompt: e.target.value, value: e.target.value});
  }

  handleKeyChange(e) {
    if(e.key === "ArrowDown") {
      this.state.history.forEach(function(target, index) {
        console.log(target.data);
        if(target.data === "> " + e.target.value) {
          if(!index === this.state.history.length) {
            var nextInput = this.state.history[index + 2];
            this.setState({value: nextInput});
            console.log('setState');
          } else {
            //do nothing you are at the end of the input
          }
        } else {
          console.log('here');
        }
      }.bind(this))
    } else if(e.key === "ArrowUp") {
      this.state.history.forEach(function(target, index) {
        if(target.data === "> " + e.target.value) {
          console.log('in target data');
          if(this.state.history) {
            var nextInput = this.state.history[index - 2].data;
            nextInput = nextInput.replace(/ /g,'');
            nextInput = nextInput.substring(1);
            console.log('next ', nextInput);
            this.setState({value: nextInput});
            this.forceUpdate();
          } else {
            console.log('in the waisted else');
            //do nothing you are at the end of the input
          }
        } else {
          console.log('here');
        }
      }.bind(this))
    }
    console.log('value', this.state.value);
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
            <input type="text" value={this.state.value} placeholder="//Do Magic" onChange={(e) => this.handleChange(e)} onKeyDown={(e) => this.handleKeyChange(e)}></input>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
