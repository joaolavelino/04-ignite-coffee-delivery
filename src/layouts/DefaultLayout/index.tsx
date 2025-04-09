import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <header> Este é o coffee delivery!</header>
      <Outlet />
    </>
  );
};

export default DefaultLayout;
