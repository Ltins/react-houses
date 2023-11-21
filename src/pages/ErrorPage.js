import { Link } from "react-router-dom";

const ErrorPage = () => {
  const text = ` \n
    Something went wrong!\n
    Check for redundant "/"\n
    Moding via url usage:\n
        /polute|amount => polute houses list with {amount} random houses\n
        /add|id|color|floors => add new house with {id} {color} {floors} values\n
        /color|id|color => set {color} for house with {id}\n
        /floors|id|floors => set {floors} for house with {id}\n
    `;

  return (
    <>
      <pre>{text}</pre>
      <Link to="/react-houses">Try again? (Link to starting page)</Link>
    </>
  );
};

export default ErrorPage;
