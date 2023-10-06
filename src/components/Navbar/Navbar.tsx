import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { PrimeIcons } from "primereact/api";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Nabvar() {
  const navigate = useNavigate();

  const redirecToHome = () => {
    navigate("/");
  };

  const redirecToPokeList = () => {
    navigate("/pokemons");
  };

  const redirecToNewPokemon = () => {
    navigate("/newpokemon");
  };

  const items: MenuItem[] = [
    {
      className: "p-3",
      label: "Home",
      icon: "pi pi-fw pi-home",
      command() {
        redirecToHome();
      },
    },

    {
      className: "p-3",
      label: "PokemonList",
      icon: "pi pi-fw pi-home",
      command() {
        redirecToPokeList();
      },
    },

    {
      className: "p-3",
      label: "New",
      icon: PrimeIcons.PLUS,
      command() {
        redirecToNewPokemon();
      },
    },
  ];

  return <Menubar model={items} />;
}
