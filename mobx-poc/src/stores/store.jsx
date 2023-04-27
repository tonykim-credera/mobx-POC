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

  removeItem = (Restaurants, itemID) => {
    const itemIndex = Restaurants.findIndex((obj) => obj.id === itemID);
    Restaurants.splice(itemIndex, 1);
  };

  addItem = () => {
    const target = this.e.target;
    store.Restaurants.push(target);
  };

  handleHeartClick = (Restaurants, itemID, liked, setLike) => {
    const itemIndex = Restaurants.findIndex((obj) => obj.id === itemID);
    Restaurants[itemIndex].liked = !Restaurants[itemIndex].liked;
    if (Restaurants[itemIndex].liked === true) {
      store.LikedRestaurants.push(Restaurants[itemIndex]);
    } else {
      this.removeItem(store.LikedRestaurants, itemID);
    }
    console.log(itemIndex);
    setLike(!liked);
  };
}

const store = new Store();

export default store;
