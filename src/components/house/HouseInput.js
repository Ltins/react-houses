import { useContext, useState } from "react";

import classes from "./HouseInput.module.css";
import HousesContext from "../../store/houses-context";
import trashcan from "../../resources/trash-can.png";

const HouseInput = (props) => {
  const context = useContext(HousesContext);
  const [floors, setFloors] = useState(1);
  const [color, setColor] = useState("#d30e0e");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    context.removeItem(props.id);
  };

  const onChangeHandler = (event) => {
    let finalValue = event.target.value;

    if (finalValue > 20) {
      finalValue = 20;
    }

    if (finalValue < 1) {
      finalValue = 1;
    }

    setFloors(finalValue);
    context.changeFloors(props.id, finalValue);
  };

  const onColorChangeHandler = (event) => {
    setColor(event.target.value);
    context.changeColor(props.id, event.target.value);
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes["house-input"]}>
      <label style={{ color: "#414956", fontWeight: "bold", fontSize: "1rem" }}>
        {`ID:${props.id}`}
      </label>
      <div>
        <label style={{ color: "#414956" }}>Number of floors</label>
        <input type="number" value={floors} onChange={onChangeHandler}></input>
        <input
          min="1"
          max="20"
          type="range"
          value={floors}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <label style={{ color }}>Color</label>
        <input
          type="color"
          onChange={onColorChangeHandler}
          value={color}
          style={{ backgroundColor: color }}
        ></input>
      </div>
      <div>
        <label style={{ color: "#ff0000" }}>Delete</label>
        <button>
          <img src={trashcan} alt="&" width="20" height="20"></img>
        </button>
      </div>
    </form>
  );
};

export default HouseInput;
