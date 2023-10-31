import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const command = params.command;

  console.log(command);

  useEffect(() => {
    navigate("/");
  });
};

export default HomePage;
