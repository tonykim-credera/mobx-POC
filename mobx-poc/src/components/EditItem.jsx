import { observer } from "mobx-react-lite";
import React from "react";

const EditItem = observer((props) => {
  return (
    <div className={props.className}>
      {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
      <label for="vehicle1"> {props.name}</label> */}
      <h2 className="text-base">{props.name}</h2>
    </div>
  );
});

export default EditItem;
