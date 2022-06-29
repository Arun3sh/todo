import { Button, TextField } from "@mui/material";
import { useState } from "react";
import "./Todo.css";
import { v4 } from "uuid";
import TodoList from "../TodoList/TodoList";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!todo) {
      console.log("here");
      return;
    }
    let updatedTodo = [
      ...todoList,
      { id: v4(), task_completed: false, task: todo },
    ];
    setTodoList(updatedTodo);
    setTodo("");
  };
  return (
    <div className="todo-container container-sm">
      <div className="todo-wrapper">
        <form className="task-input" onSubmit={handleSubmit}>
          <TextField
            className="text-field new-task"
            id="new-task"
            variant="outlined"
            fullWidth
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button className="add-task-btn" variant="outlined" type="submit">
            Add
          </Button>
        </form>

        {/* Todo list */}
        <div>
          <TodoList todoList={todoList} setTodoList={setTodoList} />
        </div>
      </div>
    </div>
  );
}

export default Todo;
