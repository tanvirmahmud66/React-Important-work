import { Route, Routes, Link} from "react-router-dom";
import DynamicDropDown from "./Components/DropDown/DynamicDropDown";
import LoginForm from "./Components/LoginForm/LoginFrom";
import SignUpForm from "./Components/SignUpForm/SignUpForm";
import TodoList from "./Components/TodoList/TodoList";
import "./Global/App.css";

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <ul className="nav-unorderedList">
          <li className="ListItem">
            <Link className="Link" to="/">Login From</Link>
          </li>
          <li className="ListItem">
            <Link className="Link" to="/sign-up-form">SignUp Form</Link>
          </li>
          <li className="ListItem">
            <Link className="Link" to="/todo-list">ToDo List</Link>
          </li>
          <li className="ListItem">
            <Link className="Link" to="/dynamic-dropdown">Drop Down</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<LoginForm/>}/>
        <Route exact path="/sign-up-form" element={<SignUpForm/>}/>
        <Route exact path="/todo-list" element={<TodoList/>}/>
        <Route exact path="/dynamic-dropdown" element={<DynamicDropDown/>}/>
      </Routes>
    </div>
  );
}

export default App;
