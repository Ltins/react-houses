import { createContext } from "react";

const HousesContext = createContext({
  items: [],
  addItem: (item) => {},
  changeColor: (id, color) => {},
  changeFloors: (id, floors) => {},
  removeItem: (id) => {},
});

export default HousesContext;
