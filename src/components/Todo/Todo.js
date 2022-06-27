import { Button, TextField } from "@mui/material";
import { useState } from "react";
import "./Todo.css";
import { v4 } from "uuid";
import TodoList from "../TodoList/TodoList";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {
    console.log("addTask");
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
        <div className="task-input">
          <TextField
            className="text-field new-task"
            id="new-task"
            variant="outlined"
            fullWidth
          />
          <Button className="add-task-btn" variant="outlined" onClick={addTask}>
            Add
          </Button>
        </div>

        {/* Todo list */}
        <div>
          <TodoList todoList={todoList} setTodoList={setTodoList} />
        </div>
      </div>
    </div>
  );
}

export default Todo;
