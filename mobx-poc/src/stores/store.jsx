import { makeAutoObservable } from "mobx";

class Store {
  ToDoItem = { name: "", description: "" };
  ToDoItemList = [
    { name: "item1", description: "description1", id: "1" },
    { name: "item2", description: "description2", id: "2" },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  removeItem = (itemID) => {
    // const itemIndexAtID = this.ToDoItemList.findIndex(
    //   (item) => item.id === itemID
    // );
    // if (itemIndexAtID > -1) {
    //   this.ToDoItemList.splice(itemIndexAtID, 1);
    // }
    this.ToDoItemList.splice(itemID - 1, itemID);
  };

  addItem = () => {
    const target = this.e.target;
    this.ToDoItemList.push(target);
  };
}

const store = new Store();

export default store;
