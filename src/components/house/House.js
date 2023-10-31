import Entrance from "./house-parts/Entrance";
import Roof from "./house-parts/Roof";
import Floor from "./house-parts/Floor";

const House = (props) => {
  return (
    <div>
      <Roof />
      <Floor color="red" />
      <Floor color="red" />
      <Entrance color="red" />
    </div>
  );
};

export default House;
