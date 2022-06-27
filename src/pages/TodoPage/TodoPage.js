import Todo from "../../components/Todo/Todo";
import "./TodoPage.css";

function TodoPage() {
  return (
    <div className="todoPage-container container-sm">
      <div className="todoPage-wrapper">
        <Todo />
      </div>
    </div>
  );
}

export default TodoPage;
