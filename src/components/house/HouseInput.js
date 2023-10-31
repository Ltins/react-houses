import classes from "./HouseInput.module.css";

const HouseInput = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes["house-input"]}>
      <div>
        <label>Number of floors</label>
        <input type="number"></input>
        <input type="range"></input>
      </div>
      <div>
        <label>Color</label>
        <input type="color"></input>
      </div>
      <div>
        <label>Delete</label>
        <button>&</button>
      </div>
    </form>
  );
};

export default HouseInput;
