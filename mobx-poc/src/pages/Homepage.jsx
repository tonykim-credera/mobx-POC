import { observer } from "mobx-react-lite";
import React from "react";
import ToDoItem from "../components/TodoItem";
import store from "../stores/store";

const Homepage = observer(() => {
  return (
    <>
      <h1> LIST OF THINGS TO DO </h1>
      {store.ToDoItemList.map((item) => {
        return <ToDoItem name={item.name} description={item.description} />;
      })}
      <h1>Count: {store.count}</h1>
    </>
  );
});

export default Homepage;
