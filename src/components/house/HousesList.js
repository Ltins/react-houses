import { useContext } from "react";

import House from "./House";
import classes from "./HousesList.module.css";
import HousesContext from "../../store/houses-context";

const HousesList = () => {
  const context = useContext(HousesContext);
  const isEmpty = context.items.length === 0 ? true : false;

  return (
    <div className={classes["houses-list"]}>
      <ul>
        {!isEmpty &&
          context.items.map((item) => (
            <li key={item.id}>
              <House color={item.color} floors={item.floors} id={item.id} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HousesList;
