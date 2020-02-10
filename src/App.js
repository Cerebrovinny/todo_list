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

 render() {
   return (
    <div className="App">
     <Todos todos={this.state.todos}/>
    </div>
  );
   }
}

export default App;
