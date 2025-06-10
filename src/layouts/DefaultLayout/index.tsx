import { Link, Outlet } from "react-router-dom";
import { CartButton } from "../../components/CartButton";
import { StyledHeader } from "./styles";

export interface DefaultLayoutProps {}
export const DefaultLayout: React.FC<DefaultLayoutProps> = () => {
  return (
    <>
      <StyledHeader>
        <img src="/assets/logo-sm.png" alt="Coffee Delivery written" />
        <div className="right-pannel">
          <nav>
            <ul>
              <li>
                <Link to="/">Menu</Link>
              </li>
              <li>
                <Link to="/history">Histórico</Link>
              </li>
            </ul>
          </nav>
          <CartButton />
        </div>
      </StyledHeader>
      <Outlet />
    </>
  );
};
