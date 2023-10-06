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
      className: "p-1",
      label: "Home",
      icon: "pi pi-fw pi-home",
      command() {
        redirecTo("/");
      },
    },

    {
      className: "p-1",
      label: "PokemonList",
      icon: "pi pi-fw pi-home",
      command() {
        redirecTo("/pokemons");
      },
    },

    {
      className: "p-1",
      label: "New",
      icon: PrimeIcons.PLUS,
      command() {
        redirecTo("/newpokemon");
      },
    },
  ];

  return <Menubar model={items} />;
}
