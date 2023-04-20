import { observer } from "mobx-react-lite";
import React from "react";
import ToDoItem from "../components/TodoItem";
import store from "../stores/store";
import { Link } from "react-router-dom";

const Homepage = observer(() => {
  return (
    <div className="m-auto mt-8 w-1/4 shadow-md p-6 bg-slate-200 ">
      <h1 className="text-xl font-bold"> TO DO LIST</h1>
      <ul className="text-sm mb-5">
        <Link to="/EditPage">Edit List</Link>
      </ul>
      <p className="text-base mb-6">Count: {store.ToDoItemList.length}</p>
      {store.ToDoItemList.map((item) => {
        return (
          <div className="my-6">
            <ToDoItem name={item.name} description={item.description} />
          </div>
        );
      })}
    </div>
  );
});

export default Homepage;
