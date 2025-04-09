import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import History from "./pages/History";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  );
};
