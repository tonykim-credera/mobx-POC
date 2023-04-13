import { observer } from "mobx-react-lite";
import React from "react";
import store from "../stores/store";
import { BrowserRouter, Route, Link } from "react-router-dom";

const NavLinks = observer(() => {
  return (
    <ul>
      <li>
        <Link to="/">Homepage</Link>
      </li>
      <li>
        <Link to="/addpage">Add Page</Link>
      </li>
    </ul>
  );
});

export default NavLinks;
