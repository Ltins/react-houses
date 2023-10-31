import { useReducer } from "react";

import HousesContext from "./houses-context";

const defaultHousesState = {
  items: [],
};

const housesReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingHouseIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingHouse = state.items[existingHouseIndex];

    if (!existingHouse) {
      const updatedHouses = state.items.concat(action.item);
      return {
        items: updatedHouses,
      };
    }
  }

  if (action.type === "REMOVE") {
    const existingHouseIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingHouse = state.items[existingHouseIndex];

    if (existingHouse) {
      const updatedHouses = state.items.filter((item) => item.id !== action.id);
      return {
        items: updatedHouses,
      };
    }
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

    return {
      items: updatedHouses,
    };
  }

  return defaultHousesState;
};

const HousesProvider = (props) => {
  const [housesState, dispatchHousesAction] = useReducer(
    housesReducer,
    defaultHousesState
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

  const housesContext = {
    items: housesState.items,
    addItem: addItemToHousesHandler,
    removeItem: removeItemFromHousesHandler,
    changeColor: changeHouseColorHandler,
    changeFloors: changeHouseFloorsHandler,
  };

  return (
    <HousesContext.Provider value={housesContext}>
      {props.children}
    </HousesContext.Provider>
  );
};

export default HousesProvider;
