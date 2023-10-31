import classes from "./PageContent.module.css";
import HousesList from "./house/HousesList";
import Form from "./Form";

const PageContent = () => {
  return (
    <div className={classes["house-constructor"]}>
      <header>House Constructor</header>
      <main>
        <Form />
        <HousesList />
      </main>
    </div>
  );
};

export default PageContent;
