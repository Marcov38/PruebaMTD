import { useDispatch, useSelector } from "react-redux";
import PokemonTeam from "../../features/pokemonTeam/PokemonTeam";
import { removePokemonTeam } from "../../redux/actions/pokemonTeamActions";
import { Toast } from "primereact/toast";
import { useRef } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const PokemonTeamPage = () => {
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
  const onRemove = (pokemonIndex: number) => {
    dispatch(removePokemonTeam(pokemonIndex));
    showToast("Info", "info", "Pokemon removido!");
  };

  const header = (
    <img
      alt="Card"
      src="https://primefaces.org/cdn/primereact/images/usercard.png"
    />
  );

  if (team.length === 0) {
    return (
      <div className="card flex justify-content-center">
        <Card header={header} className="md:w-25rem">
          <p className="m-0">No tienes pokemons en tu Equipo</p>
        </Card>
      </div>
    );
  }
  return (
    <div>
      <Toast ref={toastRef} />
      <PokemonTeam data={team} onRemove={onRemove} />
    </div>
  );
};

export default PokemonTeamPage;
