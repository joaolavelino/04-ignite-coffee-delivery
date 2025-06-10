import styled from "styled-components";
import { AddressForm } from "./components/Form";
import { OrderSummary } from "./components/Summary";

export interface CheckoutPageProps {}

export const CheckoutPage: React.FC<CheckoutPageProps> = () => {
  return (
    <>
      <header>
        <h2>Complete seu pedido</h2>
      </header>
      <StyledLayout>
        <AddressForm />
        <OrderSummary />
      </StyledLayout>
    </>
  );
};

const StyledLayout = styled.main`
  display: grid;
  grid-template-columns: 640px 1fr;
  gap: 1rem;
`;
