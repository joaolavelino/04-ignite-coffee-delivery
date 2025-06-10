import styled from "styled-components";
import { AddressForm } from "./components/Form";
import { OrderSummary } from "./components/Summary";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export interface CheckoutPageProps {}

export const CheckoutPage: React.FC<CheckoutPageProps> = () => {
  const navigate = useNavigate();
  const addressForm = useForm();
  function submitFunction(data) {
    console.log(data);
    navigate("/confirmation");
  }

  return (
    <>
      <header>
        <h2>Complete seu pedido</h2>
      </header>
      <StyledLayout>
        <FormProvider {...addressForm}>
          <form onSubmit={addressForm.handleSubmit(submitFunction)}>
            <AddressForm />
            <OrderSummary>
              <Button color="purple" type="submit" disabled>
                Confirmar Pedido
              </Button>
            </OrderSummary>
          </form>
        </FormProvider>
      </StyledLayout>
    </>
  );
};

const StyledLayout = styled.main`
  display: grid;
  grid-template-columns: 640px 1fr;
  gap: 1rem;
`;
