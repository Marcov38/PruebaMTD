import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import PokemonListPage from "./pages/PokemonListPage/PokemonListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemons" element={<PokemonListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
