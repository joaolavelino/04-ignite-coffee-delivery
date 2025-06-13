import { zodResolver } from "@hookform/resolvers/zod";
import {
  BankIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  MoneyIcon,
} from "@phosphor-icons/react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled, { css, useTheme } from "styled-components";
import zod from "zod";
import { addressFormSchema } from "./formValidation";
import { OrderSummary } from "./Summary";
import { useContext } from "react";
import { OrdersContext } from "../../../contexts/OrdersContext";

export interface CheckoutFormProps {}

export type FormType = zod.infer<typeof addressFormSchema>;

export const CheckoutForm: React.FC<CheckoutFormProps> = () => {
  const theme = useTheme();
  const { currentOrder, completeCurrentOrder } = useContext(OrdersContext);
  const navigate = useNavigate();
  const addressForm = useForm<FormType>({
    resolver: zodResolver(addressFormSchema),
    mode: "onSubmit",
  });

  function submitFunction(data: FormType) {
    console.log(data);
    completeCurrentOrder(data);
    navigate(`/confirmation/${currentOrder.id}`);
  }

  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = addressForm;

  function choosePaymentMethod(method: "credit" | "debit" | "cash") {
    setValue("paymentMethod", method);
  }

  const currentPaymentMethod = watch("paymentMethod");

  return (
    <FormProvider {...addressForm}>
      <form onSubmit={addressForm.handleSubmit(submitFunction)}>
        <StyledLayout>
          <StyledForm>
            <section>
              <header>
                <MapPinIcon color={theme.yellow[700]} size={20} />
                <div>
                  <p className="title">Endereço de entrega</p>
                  <p className="subtitle">
                    Informe o endereço onde deseja receber seu pedido
                  </p>
                </div>
              </header>
              <fieldset>
                <InputContainer>
                  <input
                    className="line1"
                    type="text"
                    {...register("zip")}
                    id="zip"
                    placeholder="CEP"
                  />
                  <div className="errorContainer">
                    {errors.zip && <p>{errors.zip.message}</p>}
                  </div>
                </InputContainer>
                <InputContainer>
                  <input
                    className="line2"
                    type="text"
                    {...register("street")}
                    id="street"
                    placeholder="Rua"
                  />
                  <div className="errorContainer">
                    {errors.street && <p>{errors.street.message}</p>}
                  </div>
                </InputContainer>

                <div className="line3">
                  <InputContainer>
                    <input
                      type="text"
                      {...register("number")}
                      id="number"
                      placeholder="Número"
                    />
                    <div className="errorContainer">
                      {errors.number && <p>{errors.number.message}</p>}
                    </div>
                  </InputContainer>
                  <InputContainer>
                    <input
                      type="text"
                      {...register("additional")}
                      id="additional"
                      placeholder="Complemento (Opcional)"
                    />
                    <div className="errorContainer">
                      {errors.additional && <p>{errors.additional.message}</p>}
                    </div>
                  </InputContainer>
                </div>
                <div className="line4">
                  <InputContainer>
                    <input
                      type="text"
                      {...register("district")}
                      id="district"
                      placeholder="Bairro"
                    />
                    <div className="errorContainer">
                      {errors.district && <p>{errors.district.message}</p>}
                    </div>
                  </InputContainer>
                  <InputContainer>
                    <input
                      type="text"
                      {...register("city")}
                      id="city"
                      placeholder="Cidade"
                    />
                    <div className="errorContainer">
                      {errors.city && <p>{errors.city.message}</p>}
                    </div>
                  </InputContainer>
                  <InputContainer>
                    <input
                      type="text"
                      {...register("state")}
                      id="state"
                      placeholder="UF"
                    />
                    <div className="errorContainer">
                      {errors.state && <p>{errors.state.message}</p>}
                    </div>
                  </InputContainer>
                </div>
              </fieldset>
            </section>
            <section>
              <header>
                <CurrencyDollarIcon color={theme.purple[500]} size={20} />
                <div>
                  <p className="title">Pagamento</p>
                  <p className="subtitle">
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </header>
              <InputContainer>
                <div className="paymentOptions">
                  <button
                    type="button"
                    onClick={() => choosePaymentMethod("credit")}
                    className={`${
                      currentPaymentMethod === "credit" && "selected"
                    }`}
                  >
                    <CreditCardIcon />
                    Cartão de crédito
                  </button>
                  <button
                    type="button"
                    onClick={() => choosePaymentMethod("debit")}
                    className={`${
                      currentPaymentMethod === "debit" && "selected"
                    }`}
                  >
                    <BankIcon />
                    Cartão de débito
                  </button>
                  <button
                    type="button"
                    onClick={() => choosePaymentMethod("cash")}
                    className={`${
                      currentPaymentMethod === "cash" && "selected"
                    }`}
                  >
                    <MoneyIcon />
                    Dinheiro
                  </button>
                </div>
                <div className="errorContainer">
                  {errors.paymentMethod && (
                    <p>{errors.paymentMethod.message}</p>
                  )}
                </div>
              </InputContainer>
            </section>
          </StyledForm>

          <OrderSummary />
        </StyledLayout>
      </form>
    </FormProvider>
  );
};

const StyledForm = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem;
      border-radius: 8px;
      background-color: ${theme.base.card};
    }
    fieldset {
      display: flex;
      flex-direction: column;
      border: none;
      gap: 0.5rem;
    }

    .line1 {
      width: 15rem;
    }

    .line3 {
      width: 100%;
      display: grid;
      grid-template-columns: 15rem 1fr;
      gap: 0.5rem;
    }

    .line4 {
      display: grid;
      width: 100%;
      grid-template-columns: 15rem 1fr 60px;
      gap: 0.5rem;
    }

    header {
      display: flex;
      gap: 0.75rem;
      .title {
        font-size: 1rem;
        margin-bottom: 0.25rem;
      }
      .subtitle {
        font-size: 0.825rem;
      }
    }

    .paymentOptions {
      display: flex;
      gap: 0.75rem;
      button {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 1rem;
        text-transform: uppercase;
        font-size: 0.75rem;
        background-color: ${theme.base.button};
        border: 2px solid transparent;
        border-radius: 4px;
        &:hover {
          background-color: ${theme.purple[300]};
          border-color: ${theme.purple[500]};
        }

        svg {
          color: ${theme.purple[500]};
        }
        &.selected {
          background-color: ${theme.purple[300]};
          border-color: ${theme.purple[500]};
        }
      }
    }
  `}
`;
const InputContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    .errorContainer {
      height: 1rem;
      min-height: 1rem;
      max-height: 1rem;
    }
    p {
      font-size: 0.875rem;
      color: ${theme.error[500]};
    }
  `}
`;

const StyledLayout = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 640px 1fr;
  gap: 1rem;
`;
