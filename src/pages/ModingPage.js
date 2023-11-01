import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import HouseContext from "../store/houses-context";

const HomePage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const context = useContext(HouseContext);

  const command = params.command;
  const commandParts = command.split("|");

  useEffect(() => {
    const execute = commandParts[0];

    if (execute === "polute") {
      const amount = Number(commandParts[1]);
      if (!isNaN(amount) && amount < 20) {
        context.addRandom(amount);
      }
    }

    if (execute === "add") {
      const id = commandParts[1];
      const color = "#" + Number(commandParts[2]);
      const floors = Number(commandParts[3]);
      if (id && color && floors && floors < 21 && floors > 0) {
        context.addItem({ id, color, floors });
      }
    }

    if (execute === "floors") {
      const id = commandParts[1];
      const floors = Number(commandParts[2]);
      console.log(id, floors);
      if (id && floors && floors < 21 && floors > 0) {
        context.changeFloors(id, floors);
      }
    }

    if (execute === "color") {
      const id = commandParts[1];
      const color = "#" + Number(commandParts[2]);
      if (id && color) {
        context.changeColor(id, color);
      }
    }

    navigate("/");
  });

  return null;
};

export default HomePage;
