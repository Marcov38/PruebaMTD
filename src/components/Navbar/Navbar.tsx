import React from "react";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { useNavigate } from "react-router-dom";

export default function Nabvar() {
  const navigate = useNavigate();
  const redirecToHome = () => {
    navigate("/");
  };
  const items: MenuItem[] = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      command() {
        redirecToHome();
      },
    },
  ];

  return <Menubar model={items} />;
}
