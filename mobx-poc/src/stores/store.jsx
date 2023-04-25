import { makeAutoObservable } from "mobx";
import RestaurantsData from "../data/restaurantsData";

class Store {
  Restaurant = {
    name: "",
    imgsrc: "",
    rating: "",
    address: { location: "" },
    price: "",
    type: { categories: [{ title: "" }] },
    yelp: "",
  };

  Restaurants = [...RestaurantsData];
  LikedRestaurants = [];

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
