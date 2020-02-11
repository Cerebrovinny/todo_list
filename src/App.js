import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Test1',
        completed: false
      },
      {
        id: 2,
        title: 'Test2',
        completed: true
      },
      {
        id: 3,
        title: 'Test3',
        completed: false
      },
    ]
  }
// Toggle Complete
markComplete = (id) => {
 this.setState({ todos: this.state.todos.map(todo => {
   if(todo.id === id) {
     todo.completed = !todo.completed
   }
   return todo;
 }) });
}

//Delete Todo
delTodo = (id) => {
 this.setState({ todos: [...this.state.todos.filter(todo => todo.id
  !== id)] });
}

 render() {
   return (
    <div className="App">
      <Header />
     <Todos todos={this.state.todos} markComplete=
     {this.markComplete} delTodo={this.delTodo} />
    </div>
  );
   }
}

export default App;
