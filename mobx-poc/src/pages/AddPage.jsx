import { observer } from "mobx-react-lite";
import React from "react";
import store from "../stores/store";
import ToDoItem from "../components/TodoItem";

const AddPage = observer(() => {
  return (
    <>
      <h1> ADD ITEMS </h1>
      <h1> Current tasks </h1>
      {store.ToDoItemList.map((item) => {
        return <ToDoItem name={item.name} description={item.description} />;
      })}
      <h1>Count: {store.count}</h1>
      <button onClick={store.addOne}> Add One</button>
      <button onClick={store.subtractOne}> Subtract One</button>
    </>
  );
});

export default AddPage;
