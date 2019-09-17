import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import  { evaluate } from 'mathjs'


class App extends Component {
  state = {
    input: ''
  }
  handleClick = (event) => {
    let {textContent} = event.target;
    if(textContent === "X") {
      textContent = '*'
    }
    if(textContent !== '=' && textContent !== 'Clear') {
      this.setState({
        input: this.state.input + textContent
      })
    }else if(textContent === "Clear") {
      this.setState({
        input: ''
      })
    }else {
      try {
        this.setState({
          input: evaluate(this.state.input)
        })
      }catch(error){
        this.setState({
          input: 'Incorrect input format  Clear and Input again'
        })
      }y
    
    }
  }
  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <div className="row">
            <Input input={this.state.input} ></Input>
          </div>
          <div className="row">
          <Button handleClick={this.handleClick}>7</Button>
          <Button handleClick={this.handleClick}>8</Button>
          <Button handleClick={this.handleClick}>9</Button>
          <Button handleClick={this.handleClick}>/</Button>
          </div>
          <div className="row">
          <Button handleClick={this.handleClick}>4</Button>
          <Button handleClick={this.handleClick}>5</Button>
          <Button handleClick={this.handleClick}>6</Button>
          <Button handleClick={this.handleClick}>X</Button>
          </div>
          <div className="row">
          <Button handleClick={this.handleClick}>1</Button>
          <Button handleClick={this.handleClick}>2</Button>
          <Button handleClick={this.handleClick}>3</Button>
          <Button handleClick={this.handleClick}>+</Button>
          </div>
          <div className="row">
          <Button handleClick={this.handleClick}>0</Button>
          <Button handleClick={this.handleClick}>.</Button>
          <Button handleClick={this.handleClick}>=</Button>
          <Button handleClick={this.handleClick}>-</Button>
          </div>
          <div className="row">
          <Button handleClick={this.handleClick}>Clear</Button>
          </div>
          
        </div>
        
     
  
       
      </div>
    );
  }
 
}

export default App;
