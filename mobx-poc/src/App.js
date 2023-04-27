import "./App.css";
import { observer } from "mobx-react-lite";
import Homepage from "./pages/Homepage";
import EditPage from "./pages/EditPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LikedPage from "./pages/LikedPage";

const App = observer(() => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact Component={Homepage} />
          <Route path="/EditPage" exact Component={EditPage} />
          <Route path="/LikedPage" exact Component={LikedPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
});

export default App;
