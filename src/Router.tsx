import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { MenuPage } from "./pages/Menu";
import { HistoryPage } from "./pages/History";
import { CheckoutPage } from "./pages/Checkout";
import { ConfirmationPage } from "./pages/Confirmation";

export interface RouterProps {}

export const Router: React.FC<RouterProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<MenuPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/confirmation/:orderId" element={<ConfirmationPage />} />
      </Route>
    </Routes>
  );
};
