import { observer } from "mobx-react-lite";
import React from "react";
import store from "../stores/store";

const ToDoItem = observer((props) => {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </>
  );
});

export default ToDoItem;
