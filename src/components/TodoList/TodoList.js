import "./TodoList.css";

function TodoList({ todoList, setTodoList }) {
  const updateTask = (id) => {
    console.log("Update");
    let updatedTodo = todoList.map((todo) => {
      if (todo.id === id) {
        todo.task_completed = !todo.task_completed;
        return todo;
      }
      return todo;
    });
    setTodoList(updatedTodo);
  };
  return (
    <div className="todolist-container container-sm">
      <div className="todolist-wrapper">
        <div className="todolist">
          {todoList.map(({ id, task_completed, task }, index) => (
            <div
              key={index}
              className={`todo-item ${task_completed && "todo-item-active"}`}
              onClick={() => updateTask(id)}
            >
              {task}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TodoList;
