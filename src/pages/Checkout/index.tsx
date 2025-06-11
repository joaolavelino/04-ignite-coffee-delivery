import { CheckoutForm } from "./components/Form";

export interface CheckoutPageProps {}

export const CheckoutPage: React.FC<CheckoutPageProps> = () => {
  return (
    <>
      <header>
        <h2>Complete seu pedido</h2>
      </header>

      <CheckoutForm />
    </>
  );
};
