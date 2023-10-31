import classes from "./Entrance.module.css";

const Entrance = (props) => {
  const entranceStyle = { backgroundColor: props.color };
  return <div className={classes.entrance} style={entranceStyle}></div>;
};

export default Entrance;
