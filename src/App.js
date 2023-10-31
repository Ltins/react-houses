import classes from "./App.module.css";
import HousesList from "./components/house/HousesList";
import Form from "./components/Form";

function App() {
  return (
    <div className={classes["house-constructor"]}>
      <header>House Constructor</header>
      <main>
        <Form />
        <HousesList />
      </main>
    </div>
  );
}

export default App;
