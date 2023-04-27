import { observer } from "mobx-react-lite";
import React from "react";
import store from "../stores/store";
import { Link } from "react-router-dom";
import ReactCard from "../components/Card";
import { Button } from "@material-tailwind/react";
import "../App.css";

const LikedPage = observer(() => {
  return (
    <>
      <div className="m-auto mt-8 w-3/4 p-6">
        <h1 className="text-2xl text-center font-bold">
          ADDISON RESTAURANT LIST
        </h1>
        <ul className="text-sm mb-5 flex justify-between mt-6">
          <p className="text-base ">
            Showing: {store.LikedRestaurants.length} Restaurants
          </p>
          <div>
            <Link className="text-base " to="/">
              <Button className="px-10 py-3 bg-blue-700 mr-6">
                View All {store.Restaurants.length} Restaurants
              </Button>
            </Link>
            <Link className="text-base " to="/EditPage">
              <Button className="px-10 py-3 bg-blue-700" type="submit">
                Edit List
              </Button>
            </Link>
          </div>
        </ul>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {store.LikedRestaurants.map((item) => {
            return (
              <ReactCard
                name={item.name}
                imgsrc={item.image_url}
                rating={item.rating}
                address={item.location.address1 ? item.location.address1 : ""}
                price={item.price}
                type={item.categories}
                yelp={item.url}
                description={item.description ? item.description : ""}
                id={item.id ? item.id : Math.random()}
              ></ReactCard>
            );
          })}
        </div>
      </div>
    </>
  );
});

export default LikedPage;
