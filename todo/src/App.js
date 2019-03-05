import React, { Component } from 'react';
import { connect } from 'react-redux';


import { addTodo } from './actions/index';
import { completeTodo } from './actions/index'
import './App.css';


class App extends Component {
  state={
    inputText: '',
  }
  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.inputText);
  }
  render() {
    return (
      <div className="App">
        <div>
          <h1>Redux Todos</h1>
           {this.props.todos.map((x, index) => (
            <div key={index} onClick={e => this.props.completeTodo(index)} className={x.completed ? "complete" : "incomplete"}>
              {console.log(x)} 
               <h3>{x.value}</h3>
            </div>
          ))}
        </div>
        <input type="text" value={this.state.inputText} onChange={e => this.setState({inputText: e.target.value})}/>
        <button onClick={this.addTodo}>Add Todo</button>
        <button>Clear Completed</button>
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
  }
}

export default connect(mapStateToProps, { addTodo, completeTodo })(App);
