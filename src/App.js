import classes from "./App.module.css";
import HousesList from "./components/house/HousesList";
import Form from "./components/Form";

//TODO: PAGE => NOT SCROLLABLE BUT ELEMENT ARE
//TODO: STYLING FOR EMPTY HOUSES PARAGRAPH
//TODO: STYLING FOR HOUSES ITSELF
//TODO: CODE REFACTORING
//TODO: COLORING
//TODO: DELETE ICON
//TODO: SIMPLE CSS ANIMS FOR BUTTONS (mb use framer-motion?)

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
