import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const redirecTo = (page: string) => {
    navigate(page);
  };
  return (
    <>
      <div className="home">
        <div className="home-title">Bienvenidos a Pokedex</div>
      </div>
    </>
  );
};

export default Home;
