import React from "react";
import ReactDOM from "react-dom";
import Reflux from "reflux";

import TodoActions from "./Actions/TodoActions";
import TodoStore from "./Stores/TodoStore";

class App extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = TodoStore;
  }

  InputChange = e => {
    TodoActions.InputChange(e.target.value);
  };

  AddTodo = () => {
    TodoActions.AddTodo(this.state.inputVal);
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map(val => (
            <li key={val.id}>{val.title}</li>
          ))}
        </ul>
        <p>
          <input type="text" onChange={this.InputChange} />
          <button onClick={this.AddTodo}>追加</button>
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
