import { useReducer } from "react";

import HousesContext from "./houses-context";

const housesReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingHouseIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingHouse = state.items[existingHouseIndex];
    let updatedHouses;

    if (existingHouse) {
      updatedHouses = [...state.items];
    } else {
      updatedHouses = state.items.concat(action.item);
    }

    localStorage.setItem("houses", JSON.stringify({ items: updatedHouses }));

    return {
      items: updatedHouses,
    };
  }

  if (action.type === "REMOVE") {
    const existingHouseIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingHouse = state.items[existingHouseIndex];
    let updatedHouses;

    if (existingHouse) {
      updatedHouses = state.items.filter((item) => item.id !== action.id);
    } else {
      updatedHouses = [...state.items];
    }

    localStorage.setItem("houses", JSON.stringify({ items: updatedHouses }));

    return {
      items: updatedHouses,
    };
  }

  if (action.type === "CHANGE_FLOORS") {
    const updatedHouses = state.items.map((item) => {
      let newFloors = item.floors;
      if (item.id === action.id) {
        newFloors = action.floors;
      }
      return {
        id: item.id,
        color: item.color,
        floors: newFloors,
      };
    });

    localStorage.setItem("houses", JSON.stringify({ items: updatedHouses }));

    return {
      items: updatedHouses,
    };
  }

  if (action.type === "CHANGE_COLOR") {
    const updatedHouses = state.items.map((item) => {
      let newColor = item.color;
      if (item.id === action.id) {
        newColor = action.color;
      }
      return {
        id: item.id,
        color: newColor,
        floors: item.floors,
      };
    });

    localStorage.setItem("houses", JSON.stringify({ items: updatedHouses }));

    return {
      items: updatedHouses,
    };
  }

  if (action.type === "POLUTE") {
    let newItems = [];

    for (let i = 0; i < action.amount; i++) {
      const id = Math.random().toString(16).slice(2, 6);
      const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
      const floors = Math.floor(Math.random() * 4 + 1);
      newItems.push({ id, color, floors });
    }
    const updatedHouses = state.items.concat(newItems);

    localStorage.setItem("houses", JSON.stringify({ items: updatedHouses }));

    return {
      items: updatedHouses,
    };
  }

  return { items: [] };
};

const HousesProvider = (props) => {
  const housesStateStr = localStorage.getItem("houses");
  const localHousesState = housesStateStr
    ? JSON.parse(housesStateStr)
    : { items: [] };

  const [housesState, dispatchHousesAction] = useReducer(
    housesReducer,
    localHousesState
  );

  const addItemToHousesHandler = (item) => {
    dispatchHousesAction({ type: "ADD", item });
  };

  const removeItemFromHousesHandler = (id) => {
    dispatchHousesAction({ type: "REMOVE", id });
  };

  const changeHouseFloorsHandler = (id, floors) => {
    dispatchHousesAction({ type: "CHANGE_FLOORS", id, floors });
  };

  const changeHouseColorHandler = (id, color) => {
    dispatchHousesAction({ type: "CHANGE_COLOR", id, color });
  };

  const addRandomHousesHandler = (amount) => {
    dispatchHousesAction({ type: "POLUTE", amount });
  };

  const housesContext = {
    items: housesState.items,
    addItem: addItemToHousesHandler,
    removeItem: removeItemFromHousesHandler,
    changeColor: changeHouseColorHandler,
    changeFloors: changeHouseFloorsHandler,
    addRandom: addRandomHousesHandler,
  };

  return (
    <HousesContext.Provider value={housesContext}>
      {props.children}
    </HousesContext.Provider>
  );
};

export default HousesProvider;
