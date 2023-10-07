import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import PokemonListPage from "./pages/PokemonListPage/PokemonListPage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage/PokemonDetailsPage";
import Nabvar from "./components/Navbar/Navbar";
import FormCreationPage from "./pages/FormCreationPage/FormCreationPage";
import PokemonTeamPage from "./pages/PokemonTeamPage/PokemonTeamPage";

function App() {
  return (
    <BrowserRouter>
      {<Nabvar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemons" element={<PokemonListPage />} />
        <Route path="/pokemons/:id" element={<PokemonDetailsPage />} />
        <Route path="/newpokemon" element={<FormCreationPage />} />
        <Route path="/pokemons/team" element={<PokemonTeamPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
