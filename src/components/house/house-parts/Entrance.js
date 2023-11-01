import classes from "./Floor.module.css";

const Entrance = (props) => {
  return (
    <div className={classes.floor} style={{ backgroundColor: props.color }}>
      <div className={classes.door}></div>
      <div className={classes.window}></div>
    </div>
  );
};

export default Entrance;
