import { Link, Outlet } from "react-router-dom";

export interface DefaultLayoutProps {}
export const DefaultLayout: React.FC<DefaultLayoutProps> = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/history">history</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
