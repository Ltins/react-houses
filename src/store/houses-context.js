import { createContext } from "react";

const HousesContext = createContext({
  items: [],
  addItem: (item) => {},
  changeColor: (id, color) => {},
  changeFloors: (id, floors) => {},
  removeItem: (id) => {},
  addRandom: (amount) => {},
});

export default HousesContext;
