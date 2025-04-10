import { NavLink, Outlet, useNavigate } from "react-router-dom";
import CDLogo from "../../../public/assets/logo-sm.png";
import { CartButton } from "../../components/cartButton";
import { Header } from "./styles";
import { Button } from "../../components/button";
import { ClockCounterClockwise } from "@phosphor-icons/react";

const DefaultLayout = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <NavLink to="/">
          <img src={CDLogo} alt="" />
        </NavLink>
        <nav>
          <Button variant="icon" onClick={() => navigate("./history")}>
            <ClockCounterClockwise />
          </Button>
          <CartButton number={1} />
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DefaultLayout;
