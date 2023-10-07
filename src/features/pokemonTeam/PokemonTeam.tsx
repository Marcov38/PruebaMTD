import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removePokemonTeam } from "../../redux/actions/pokemonTeamActions";
import { useRef } from "react";
import { Toast } from "primereact/toast";
import { Pokemon } from "../pokeList/types";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const PokemonTeam = () => {
  const toastRef = useRef<Toast>(null);

  const showToast = (detail: string, severity: any, summary: string) => {
    toastRef.current?.show({
      severity: severity,
      summary: summary,
      detail: detail,
      life: 1500,
    });
  };
  const team = useSelector((state: any) => state.pokemonTeam.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onRemove = (pokemonId: number) => {
    dispatch(removePokemonTeam(pokemonId));
    showToast("Info", "info", "Pokemon agregado al equipo!");
  };
  const redirecTo = (id: number) => {
    navigate(`/pokemons/${id}`);
  };
  return (
    <div className="team-container">
      <Toast ref={toastRef} />
      {team.map((pokemon: Pokemon) => (
        <Card key={pokemon.id} title={pokemon.name} className="pokemonCard">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <Button
            severity="danger"
            label="Quitar"
            onClick={() => onRemove(pokemon.id)}
          />
          <Button
            severity="success"
            label="Ver Detalles"
            onClick={() => redirecTo(pokemon.id)}
          />
        </Card>
      ))}
    </div>
  );
};

export default PokemonTeam;
