import { Link } from "react-router-dom";

const ErrorPage = () => {
  const text = ` \n
    Something went wrong! \n
    Check for redundant "/" \n
    Moding via url usage: \n
        appending /polute|5 to url will lead to creating 5 red houses with 1 floor and random id \n
        appending /add|#ffff|3 to url will lead to creating a house with color #ffff, 3 floors and random id \n
        appending /color|f23a|#00000 to url will lead to changing color value to #00000 for the house with id f23a \n
        appending /floors|b23a|3 to url will lead to changing floors value to 3 for the house with id b23a \n
    `;

  return (
    <>
      <pre>{text}</pre>
      <Link to="/">Try again?</Link>
    </>
  );
};

export default ErrorPage;
