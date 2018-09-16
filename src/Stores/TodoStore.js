import Reflux from "reflux";
import TodoActions from "../Actions/TodoActions";
import * as uuidv4 from "uuid/v4";
import _ from "lodash";

class TodoStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: "todo1"
        }
      ],
      inputVal: ""
    };
    this.listenables = TodoActions;
  }

  onAddTodo = text => {
    let newTodos = _.concat(this.state.todos, {
      id: uuidv4(),
      title: text
    });
    this.setState({ todos: newTodos });
  };

  onInputChange = text => {
    this.setState({ inputVal: text });
  };
}

export default TodoStore;
