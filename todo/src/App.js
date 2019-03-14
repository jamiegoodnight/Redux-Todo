import React, { Component } from 'react';
import { connect } from 'react-redux';


import { addTodo } from './actions/index';
import { completeTodo } from './actions/index';
import { clear } from './actions/index';
import { save } from './actions/index';
import './App.css';


class App extends Component {
  state={
    inputText: '',
  }
  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.inputText)
    this.setState({
      inputText: ''
    })
  }
  render() {
    return (
      <div className="App">
        <div>
          <h1>Lambda Redux Todos</h1>
          <button onClick={this.props.save}>Save Todos</button>
          <button onClick={this.props.clear}>Clear Completed</button>
           {this.props.todos.map((x, index) => (
            <div key={index} onClick={e => this.props.completeTodo(index)}>
              {console.log(x)} 
               <h3 className={x.completed ? "complete" : "incomplete"}>{x.value}</h3>
            </div>
          ))}
        </div>
        <input type="text" value={this.state.inputText} onChange={e => this.setState({inputText: e.target.value})}/>
        <button onClick={this.addTodo}>Add Todo</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    todos: state.todos
    // todos:  [
    //   value: state.value,
    //   completed: state.completed,
    // ]
    // Implicit return wrap {} in (). So => ({   todos: state.todos })
  }
}

export default connect(mapStateToProps, { addTodo, completeTodo, clear, save })(App);
