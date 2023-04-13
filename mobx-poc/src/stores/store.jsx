import { makeAutoObservable } from "mobx";

class Store {
  ToDoItemList = [
    { name: "item1", description: "description1" },
    { name: "item2", description: "description2" },
  ];

  count = 0;

  constructor() {
    makeAutoObservable(this);
  }
  addOne = () => {
    this.count++;
  };

  subtractOne = () => {
    this.count--;
  };
}

const store = new Store();

export default store;
