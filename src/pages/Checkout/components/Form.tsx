import {
  BankIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  MoneyIcon,
} from "@phosphor-icons/react";
import styled, { css, useTheme } from "styled-components";

export interface AddressFormProps {}

export const AddressForm: React.FC<AddressFormProps> = () => {
  const theme = useTheme();
  return (
    <StyledForm action="POST">
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
          <input
            className="line1"
            type="text"
            name="zip"
            id="zip"
            placeholder="CEP"
          />
          <input
            className="line2"
            type="text"
            name="street"
            id="street"
            placeholder="Rua"
          />
          <div className="line3">
            <input type="text" name="number" id="number" placeholder="Número" />
            <input
              type="text"
              name="additional"
              id="additional"
              placeholder="Complemento (Opcional)"
            />
          </div>
          <div className="line4">
            <input
              type="text"
              name="district"
              id="district"
              placeholder="Bairro"
            />
            <input type="text" name="city" id="city" placeholder="Cidade" />
            <input type="text" name="state" id="state" placeholder="UF" />
          </div>
        </fieldset>
      </section>
      <section>
        <header>
          <CurrencyDollarIcon color={theme.purple[500]} size={20} />
          <div>
            <p className="title">Pagamento</p>
            <p className="subtitle">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </header>
        <div className="paymentOptions">
          <button>
            <CreditCardIcon />
            Cartão de crédito
          </button>
          <button>
            <BankIcon />
            Cartão de débito
          </button>
          <button>
            <MoneyIcon />
            Dinheiro
          </button>
        </div>
      </section>
    </StyledForm>
  );
};

const StyledForm = styled.form`
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
      gap: 1rem;
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
      }
    }
  `}
`;
