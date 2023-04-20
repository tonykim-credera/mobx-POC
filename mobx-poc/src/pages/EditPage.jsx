import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import store from "../stores/store";
import ToDoItem from "../components/TodoItem";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const EditPage = observer(() => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && description !== "") {
      store.ToDoItemList.push({ name: name, description: description });
      setName("");
      setDescription("");
    }
  };

  return (
    <div className="m-auto mt-8 w-1/4 shadow-md p-6 bg-slate-200 ">
      <h1 className="text-xl font-bold"> TO DO LIST </h1>
      <ul className="text-sm mb-5">
        <Link to="/">Save</Link>
      </ul>
      <p className="text-base">Count: {store.ToDoItemList.length}</p>
      {store.ToDoItemList.map((item) => {
        return (
          <div className="my-6 flex justify-between text-left">
            <ToDoItem
              className="w-1/2"
              name={item.name}
              description={item.description}
            />
            <Button
              className="w-1/4 bg-red-400"
              onClick={(e) => store.removeItem(item.indexOf(0))}
            >
              delete
            </Button>
          </div>
        );
      })}
      <form onSubmit={handleSubmit} className="pt-6">
        <input
          className="w-full mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2"
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="w-full mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2"
          type="text"
          id="description"
          name="description"
          value={description}
          placeholder="description"
          onChange={(event) => setDescription(event.target.value)}
        />
        <Button className="px-10 py-3 bg-gray-100" type="submit">
          Add Item
        </Button>
      </form>
    </div>
  );
});

export default EditPage;
