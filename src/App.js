import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import TodoPage from "./pages/TodoPage/TodoPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <TodoPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
