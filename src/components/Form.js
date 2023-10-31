import HouseInput from "./house/HouseInput";
import classes from "./Form.module.css";

const Form = () => {
  return (
    <div className={classes["house-form"]}>
      <div>
        <h1>Control Panel</h1>
      </div>
      <div>
        <ul>
          <li>
            <HouseInput />
          </li>
          <li>
            <HouseInput />
          </li>
          <li>
            <HouseInput />
          </li>
        </ul>
      </div>
      <div>
        <button>CLICK</button>
      </div>
    </div>
  );
};

export default Form;
