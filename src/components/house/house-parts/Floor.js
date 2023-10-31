import classes from "./Floor.module.css";

const Floor = (props) => {
  const floorStyle = { backgroundColor: props.color };
  return <div className={classes.floor} style={floorStyle}></div>;
};

export default Floor;
