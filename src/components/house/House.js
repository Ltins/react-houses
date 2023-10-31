import Entrance from "./house-parts/Entrance";
import Roof from "./house-parts/Roof";
import Floor from "./house-parts/Floor";

const House = (props) => {
  let floors = [];
  for (let i = 0; i < props.floors - 1; i++) {
    floors.push(<Floor color={props.color} key={`${props.id}${i}`} />);
  }
  return (
    <div>
      <Roof />
      {floors.length !== 0 && floors}
      <Entrance color={props.color} />
    </div>
  );
};

export default House;
