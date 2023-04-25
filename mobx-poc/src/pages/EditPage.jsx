import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import store from "../stores/store";
import EditItem from "../components/EditItem";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import "../App.css";

const EditPage = observer(() => {
  const [name, setName] = useState("");
  const [imgsrc, setImgsrc] = useState("");
  const [rating, setRating] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [yelp, setYelp] = useState("");
  // const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name !== "" &&
      imgsrc !== "" &&
      rating !== "" &&
      address !== "" &&
      price !== "" &&
      type !== "" &&
      yelp !== ""
    ) {
      store.Restaurants.unshift({
        name: name,
        image_url: imgsrc,
        rating: rating,
        location: { address1: address },
        price: price,
        categories: [{ title: type }],
        url: yelp,
        // description: description,
      });

      setName("");
      setImgsrc("");
      setRating("");
      setAddress("");
      setPrice("");
      setType("");
      setYelp("");
      // setDescription("");
    }
  };

  return (
    <div className="flex gap-6 p-6 m-auto w-3/4">
      <div className="m-auto mt-8 w-1/2 shadow-md p-6 bg-white">
        <h1 className="text-xl text-center font-bold">
          {store.Restaurants.length} Restaurants
        </h1>
        {store.Restaurants.map((item) => {
          return (
            <div className="my-6 flex items-center justify-between text-left">
              <EditItem className="w-1/2" name={item.name} />
              <Button
                className="w-1/4 bg-red-400"
                onClick={(e) => store.removeItem(item.indexOf(0))}
              >
                delete
              </Button>
            </div>
          );
        })}
      </div>
      <div className="m-auto w-1/2 mt-8 shadow-md p-6 bg-white">
        <h1 className="text-xl text-center font-bold"> Add New Restaurant </h1>
        <ul className="text-sm mb-5"></ul>
        <form onSubmit={handleSubmit} className="pt-6">
          <input
            className="w-full mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2"
            type="text"
            id="imgsrc"
            name="imgsrc"
            value={imgsrc}
            placeholder="img url"
            onChange={(event) => setImgsrc(event.target.value)}
          />
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
            className="w-full mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2"
            type="text"
            id="rating"
            name="rating"
            value={rating}
            placeholder="rating out of 5"
            onChange={(event) => setRating(event.target.value)}
          />
          <input
            className="w-full mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2"
            type="text"
            id="address"
            name="address"
            value={address}
            placeholder="address"
            onChange={(event) => setAddress(event.target.value)}
          />
          {/* <input
            className="w-full mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2"
            type="text"
            id="description"
            name="description"
            value={description}
            placeholder="description"
            onChange={(event) => setDescription(event.target.value)}
          /> */}
          <input
            className="w-full mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2"
            type="text"
            id="type"
            name="type"
            value={type}
            placeholder="type"
            onChange={(event) => setType(event.target.value)}
          />
          <input
            className="w-full mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2"
            type="text"
            id="price"
            name="price"
            value={price}
            placeholder="price (indicate with $ signs)"
            onChange={(event) => setPrice(event.target.value)}
          />
          <input
            className="w-full mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2"
            type="text"
            id="yelp"
            name="yelp"
            value={yelp}
            placeholder="yelp link"
            onChange={(event) => setYelp(event.target.value)}
          />
          <div className="grid grid-cols-2 gap-1">
            <Button className="px-10 py-3 bg-blue-500" type="submit">
              Add Item
            </Button>
            <Link to="/">
              <Button className="bg-gray-500 w-full">Save</Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
});

export default EditPage;
