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
        <div className="home-title">Te damos la bienvenida a tu Pokedex</div>
        <div className="homepage-cards">
          <div className="home-cards">
            <Card title="Mis Pokemons"></Card>
            <Button
              onClick={() => redirecTo("/pokemons")}
              label="Ver pokemons"
              severity="info"
              className="home-cards-button"
            />
          </div>

          <div className="home-cards">
            <Card title="Razas"></Card>
            <Button
              label="Ver razas"
              severity="info"
              className="home-cards-button"
              onClick={() => redirecTo("/razas")}
            />
          </div>

          <div className="home-cards">
            <Card title="Mi equipo"></Card>
            <Button
              label="Ver equipo"
              severity="info"
              className="home-cards-button"
              onClick={() => redirecTo("/mi-equipo")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
