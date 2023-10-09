import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import "./PokemonTeam.css";

interface Pokemon {
  pokeId: number;
  pokeImg: string;
  pokeName: string;
  dateAdded: string;
}

const PokemonTeam = ({ data, onRemove }) => {
  const navigate = useNavigate();

  const redirecTo = (id: number) => {
    navigate(`/pokemons/${id}`);
  };
  return (
    <div className="team-container">
      {data.map((pokemon: Pokemon, index: number) => (
        <Card key={index} title={pokemon.pokeName} className="pokemonCard">
          {pokemon.dateAdded}
          <img src={pokemon.pokeImg} alt={pokemon.pokeName} />
          <Button
            severity="danger"
            label="Quitar"
            onClick={() => onRemove(index)}
          />
          <Button
            severity="success"
            label="Ver Detalles"
            onClick={() => redirecTo(pokemon.pokeId)}
          />
        </Card>
      ))}
    </div>
  );
};

export default PokemonTeam;
