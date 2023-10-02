import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import PokemonListPage from "./pages/PokemonListPage/PokemonListPage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage/PokemonDetailsPage";
import Nabvar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      {<Nabvar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemons" element={<PokemonListPage />} />
        <Route path="/pokemons/:id" element={<PokemonDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
