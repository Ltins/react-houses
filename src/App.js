import classes from "./App.module.css";
import HousesList from "./components/house/HousesList";
import Form from "./components/Form";

/*
Must have:
-Check for bugs + refactor code
-House redesign
-Change header styling
Maybe:
-Try to implement rendering via url params
*/

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
