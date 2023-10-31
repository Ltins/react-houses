import classes from "./App.module.css";
import HousesList from "./components/HousesList";

function App() {
  return (
    <div className={classes.row}>
      <div class={classes.column}>INPUT</div>
      <div class={classes.column}>
        <HousesList />
      </div>
    </div>
  );
}

export default App;
