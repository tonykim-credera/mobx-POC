import logo from "./logo.svg";
import "./App.css";
import { observer } from "mobx-react-lite";
import store from "./stores/store";
import TodoItem from "./components/TodoItem";
import Homepage from "./pages/Homepage";
import EditPage from "./pages/EditPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = observer(() => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact Component={Homepage} />
          <Route path="/EditPage" exact Component={EditPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
});

export default App;
