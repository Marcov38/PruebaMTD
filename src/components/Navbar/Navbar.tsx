import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { PrimeIcons } from "primereact/api";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Nabvar() {
  const navigate = useNavigate();

  const redirecTo = (path: string) => {
    navigate(path);
  };

  const items: MenuItem[] = [
    {
      className: "p-0",
      label: "Home",
      icon: "pi pi-fw pi-home",
      command() {
        redirecTo("/");
      },
    },

    {
      className: "p-0",
      label: "PokemonList",
      icon: "pi pi-fw pi-home",
      command() {
        redirecTo("/pokemons");
      },
    },

    {
      className: "p-0",
      label: "AddPokemon",
      icon: PrimeIcons.PLUS,
      command() {
        redirecTo("/newpokemon");
      },
    },

    {
      className: "p-0",
      label: "MyTeam",
      icon: "pi pi-search",
      command() {
        redirecTo("/pokemons/team");
      },
    },
  ];

  return <Menubar model={items} />;
}
