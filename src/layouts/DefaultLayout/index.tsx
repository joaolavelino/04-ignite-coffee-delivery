import { ShoppingCart } from "@phosphor-icons/react";
import { NavLink, Outlet } from "react-router-dom";
import CDLogo from "../../../public/assets/logo-sm.png";
import { Header } from "./styles";

const DefaultLayout = () => {
  return (
    <>
      <Header>
        <NavLink to="/">
          <img src={CDLogo} alt="" />
        </NavLink>
        <nav>
          <NavLink to="/history" title="bestellungen">
            Meine Bestellungen
          </NavLink>
          <ShoppingCart weight="fill" />
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DefaultLayout;
