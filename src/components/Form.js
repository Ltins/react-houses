import { useContext } from "react";

import classes from "./Form.module.css";
import HouseInput from "./house/HouseInput";
import HousesContext from "../store/houses-context";

const Form = () => {
  const context = useContext(HousesContext);

  const isEmpty = context.items.length === 0 ? true : false;

  const onClickHanlder = () => {
    context.addRandom(1);
  };

  return (
    <div className={classes["house-form"]}>
      <div className={classes["house-form-header"]}>
        <h1>Control Panel</h1>
        <button onClick={onClickHanlder}>+</button>
      </div>
      <div className={classes["house-list"]}>
        <ul>
          {!isEmpty &&
            context.items.map((item) => (
              <li key={item.id}>
                <HouseInput
                  id={item.id}
                  color={item.color}
                  floors={item.floors}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Form;
