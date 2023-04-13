import logo from "./logo.svg";
import "./App.css";
import { observer } from "mobx-react-lite";
import store from "./stores/store";
import TodoItem from "./components/TodoItem";
import Homepage from "./pages/Homepage";
import AddPage from "./pages/AddPage";
import NavLinks from "./pages/NavLinks";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = observer(() => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <div>
          <h1>COUNT: </h1>
          <p>{store.count}</p>
          <button onClick={store.addOne}> add one </button>
          <button onClick={store.subtractOne}> subtract one </button>
        </div>
        <Page2 /> */}
        <NavLinks />
        <Routes>
          <Route path="/" exact Component={Homepage} />
          <Route path="/AddPage" exact Component={AddPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
});

export default App;
