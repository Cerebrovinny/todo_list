import React, { Component } from 'react';
import Todos from './components/Todos'

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

 render() {
   return (
    <div className="App">
     <Todos todos={this.state.todos} markComplete={this.markComplete} />
    </div>
  );
   }
}

export default App;
