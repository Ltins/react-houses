import { useContext } from "react";

import classes from "./Form.module.css";
import HouseInput from "./house/HouseInput";
import HousesContext from "../store/houses-context";

const Form = () => {
  const context = useContext(HousesContext);

  const isEmpty = context.items.length === 0 ? true : false;

  const onClickHanlder = () => {
    const id = Math.random().toString(16).slice(2, 6);
    context.addItem({ id, color: "#d30e0e", floors: 1 });
  };

  return (
    <div className={classes["house-form"]}>
      <div>
        <h1>Control Panel</h1>
      </div>
      <div>
        <ul>
          {isEmpty && <p>No houses present!</p>}
          {!isEmpty &&
            context.items.map((item) => (
              <li key={item.id}>
                <HouseInput id={item.id} />
              </li>
            ))}
        </ul>
      </div>
      <div>
        <button onClick={onClickHanlder}>CLICK</button>
      </div>
    </div>
  );
};

export default Form;
