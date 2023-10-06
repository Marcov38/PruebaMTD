import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useSelector } from "react-redux";
import "./PokemonDetails.css";

const PokemonDetails = () => {
  const pokeDetails = useSelector(
    (state: any) => state.pokemonDetailsPersist.data
  );

  const navigate = useNavigate();
  const redirecTo = () => {
    navigate("/pokemons");
  };

  const header = pokeDetails?.sprites?.front_default && (
    <img alt="Card" src={pokeDetails?.sprites?.front_default} width="50px" />
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
      />
    </div>
  );

  return (
    <div className="card flex justify-content-center">
      <Card
        title={pokeDetails?.name}
        subTitle={<p>Experiencia: {pokeDetails?.base_experience} </p>}
        footer={footer}
        header={header}
        className="md:w-25rem"
      >
        <p className="m-0">Peso: {pokeDetails?.weight}</p>
      </Card>
    </div>
  );
};

export default PokemonDetails;
