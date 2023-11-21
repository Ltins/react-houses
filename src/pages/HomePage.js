import { Outlet } from "react-router-dom";
import PageContent from "../components/PageContent";

const HomePage = () => {
  return (
    <>
      <PageContent />
      <Outlet />
    </>
  );
};

export default HomePage;
