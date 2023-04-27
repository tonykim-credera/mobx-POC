import { observer } from "mobx-react-lite";
import React from "react";
import store from "../stores/store";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import {
  StarIcon,
  HeartIcon,
  HashtagIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import "../App.css";
import { useState } from "react";

const ReactCard = observer((props) => {
  const [liked, setLike] = useState(props.liked);
  return (
    <Card className={`w-full shadow-lg ${props.className}`}>
      <CardHeader floated={false} color="blue-gray">
        <img
          className="object-cover h-64 w-full"
          src={props.imgsrc}
          alt={props.name}
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        <IconButton
          size="sm"
          color={liked ? "red" : "white"}
          variant="text"
          className="!absolute top-4 right-4 rounded-full"
          onClick={() =>
            store.handleHeartClick(store.Restaurants, props.id, liked, setLike)
          }
        >
          <HeartIcon className="h-6 w-6" />
        </IconButton>
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {props.name}
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            <StarIcon className="-mt-0.5 h-5 w-5 text-blue-400" />
            {props.rating}
          </Typography>
        </div>
        <Typography className="text-left" color="gray">
          {props.address}
        </Typography>
        <Typography className="text-left" color="gray">
          {props.description}
        </Typography>
        <div className="group mt-8 flex flex-wrap items-center gap-3">
          <Tooltip content={props.price}>
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <CurrencyDollarIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          {props.type.map((category) => {
            return (
              <Tooltip content={category.title}>
                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                  <HashtagIcon className="h-5 w-5" />
                </span>
              </Tooltip>
            );
          })}
        </div>
      </CardBody>
      <CardFooter className="pt-3">
        <a href={props.yelp}>
          <Button
            className="bg-blue-400 hover:bg-blue-600 duration-200"
            size="lg"
            fullWidth={true}
          >
            Reserve
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
});

export default ReactCard;
