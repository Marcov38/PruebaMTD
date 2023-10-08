import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import { Pokemon } from "../pokeList/types";
import "./PokemonDetails.css";

const PokemonDetails = ({
  data,
  onAdd,
}: {
  data: Pokemon;
  onAdd: () => void;
}) => {
  // crear una funcion que cuando haga click a agregar al equipo, seme agregue a pokemonTeam

  const navigate = useNavigate();
  const redirecTo = () => {
    navigate("/pokemons");
  };

  const header = data?.sprites?.front_default && (
    <img alt="Card" src={data?.sprites?.front_default} width="50px" />
  );
  const footer = (
    <div className="flex flex-wrap justify-content-center gap-3 p-3 ">
      <Button
        className="bg-primary border-primary-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700"
        label="Atras"
        icon="pi pi-check"
        onClick={() => redirecTo()}
      />
      <Button
        label="Agregar al equipo"
        icon="pi pi-times"
        className="bg-primary border-primary-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700"
        onClick={() => onAdd()}
      />
    </div>
  );

  return (
    <div className="card cardContainer">
      <Card
        title={data?.name}
        subTitle={<p>Experiencia: {data?.base_experience} </p>}
        footer={footer}
        header={header}
        className="md:w-25rem"
      >
        <p className="m-0">Peso: {data?.weight}</p>
      </Card>
    </div>
  );
};

export default PokemonDetails;
