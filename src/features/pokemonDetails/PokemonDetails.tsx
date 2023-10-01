import { useNavigate, useParams } from "react-router-dom";
import { Pokemon } from "../pokeList/types";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

const PokemonDetails = ({ pokeDetails }: any) => {
  const navigate = useNavigate();
  const redirecTo = () => {
    navigate("/pokemons");
  };
  console.log(pokeDetails);
  const { id } = useParams();
  const pokemonInfo = pokeDetails?.find(
    (poke: Pokemon) => poke.id.toString() === id
  );

  const header = pokemonInfo?.sprites?.front_default && (
    <img alt="Card" src={pokemonInfo?.sprites?.front_default} width="50px" />
  );
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <Button label="Atras" icon="pi pi-check" onClick={() => redirecTo()} />
      <Button
        label="Agregar al equipo"
        icon="pi pi-times"
        className="p-button-outlined p-button-secondary"
      />
    </div>
  );

  return (
    <div className="card flex justify-content-center">
      <Card
        title={pokemonInfo?.name}
        subTitle={<p>Experiencia: {pokemonInfo?.base_experience} </p>}
        footer={footer}
        header={header}
        className="md:w-25rem"
      >
        <p className="m-0">Peso: {pokemonInfo?.weight}</p>
      </Card>
    </div>
  );
};

export default PokemonDetails;
