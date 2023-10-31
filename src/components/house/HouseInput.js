import { useContext, useState } from "react";

import classes from "./HouseInput.module.css";
import HousesContext from "../../store/houses-context";

const HouseInput = (props) => {
  const context = useContext(HousesContext);
  const [floors, setFloors] = useState(1);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    context.removeItem(props.id);
  };

  const onChangeHandler = (event) => {
    setFloors(event.target.value);
    context.changeFloors(props.id, event.target.value);
  };

  const onColorChangeHandler = (event) => {
    context.changeColor(props.id, event.target.value);
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes["house-input"]}>
      <div>
        <label>Number of floors</label>
        <input
          type="number"
          min="1"
          max="5"
          value={floors}
          onChange={onChangeHandler}
        ></input>
        <input
          type="range"
          min="1"
          max="5"
          value={floors}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <label>Color</label>
        <input
          type="color"
          onChange={onColorChangeHandler}
          defaultValue="#d30e0e"
        ></input>
      </div>
      <div>
        <label>Delete</label>
        <button>&</button>
      </div>
    </form>
  );
};

export default HouseInput;
