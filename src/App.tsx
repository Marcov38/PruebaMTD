import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import PokemonListPage from "./pages/PokemonListPage/PokemonListPage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage/PokemonDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemons" element={<PokemonListPage />} />
        <Route path="/pokemons/:id" element={<PokemonDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
