import classes from "./Floor.module.css";

const Floor = (props) => {
  return (
    <div className={classes.floor} style={{ backgroundColor: props.color }}>
      <div className={classes.window}></div>
      <div className={classes["window-second"]}></div>
    </div>
  );
};

export default Floor;
