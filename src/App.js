import classes from "./App.module.css";
import HousesList from "./components/house/HousesList";
import Form from "./components/Form";

function App() {
  return (
    <div className={classes["house-constructor"]}>
      <header>House Constructor</header>
      <main>
        <div className={classes.input}>
          <Form />
        </div>
        <div className={classes.houses}>
          <HousesList />
        </div>
      </main>
    </div>
  );
}

export default App;
