import React, { Component } from 'react';
import './App.css';

class ConsoleUI extends Component {
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
    var newState = e.target.value || e;
    this.setState({prompt: newState, value: newState});
  }

  handleKeyChange(e) {
    if(e.key === "ArrowDown") {
      this.state.history.forEach(function(target, index) {
        console.log('original target data ', target.data);
        if(target.data === this.state.value || target.data === "> " + e.target.value) {
          console.log('in target data', target.data, e.target.value);
            var nextInput = this.state.history[index + 2].data;
            nextInput = nextInput.replace(/ /g,'');
            nextInput = nextInput.substring(1);
            console.log('new ', nextInput);
            this.setState({value: nextInput});
        } else {
          console.log('not found', this.state.history);
        }
      }.bind(this))
    } else if(e.key === "ArrowUp") {
      this.state.history.forEach(function(target, index) {
        console.log('original target data ', target.data);
        // var newTargetData = target.data.replace(/ /g,'');
        // console.log('newTarget ', newTargetData);
        if(target.data === this.state.value || target.data === "> " + e.target.value) {
          console.log('in target data');
            var nextInput = this.state.history[index - 2].data;
            nextInput = nextInput.replace(/ /g,'');
            nextInput = nextInput.substring(1);
            console.log('new ', nextInput);
            this.setState({value: nextInput});
        } else {
          console.log('not found', this.state.history, this.state.value, e.target.value );
        }
      }.bind(this))
    }
  }
//because you modify the original array when you are searching through it so when you are comparing they are not the same
  render() {
    return (
      <div className="ConsoleUI">
        <div className="header">
          <h2>ConsoleUI</h2>
        </div>
        <div>
            {this.state.history.map((output, index) => (
              <p key={index}>{output.data}</p>
            ))}
        </div>
        <div>
          <form className="commandLine" onSubmit={(e) => this.handleCommandLineInput(e)}>
            <input type="text" value={this.state.value} placeholder="//Do Magic" onChange={(e) => this.handleChange(e)}
            onKeyDown={(e) => this.handleKeyChange(e)} className="CLInput"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default ConsoleUI;
