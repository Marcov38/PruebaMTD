import Container from "../../components/Container/Container";
import { GetResponse } from "./types";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface PruebaProps {
  pokemons: GetResponse | null;
}

const PokemonList = ({ pokemons }: PruebaProps) => {
  const columns = [{ field: "name", header: "Nombre" }];
  console.log(pokemons);

  return (
    <Container>
      {pokemons && (
        <DataTable value={pokemons.results}>
          {columns.map((col) => (
            <Column key={col.field} field={col.field} header={col.header} />
          ))}
        </DataTable>
      )}
    </Container>
  );
};

export default PokemonList;
