import House from "./House";
import classes from "./HousesList.module.css";

const HousesList = () => {
  return (
    <>
      <ul className={classes["houses-list"]}>
        <li>
          <House />
        </li>
        <li>
          <House />
        </li>
        <li>
          <House />
        </li>
      </ul>
    </>
  );
};

export default HousesList;
