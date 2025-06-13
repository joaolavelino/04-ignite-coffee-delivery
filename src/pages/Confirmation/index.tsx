import {
  CurrencyDollarIcon,
  MapPinIcon,
  TimerIcon,
} from "@phosphor-icons/react";
import { BackButton, ConfirmationCard, IconCircle } from "./styles";
import { useTheme } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { OrdersContext } from "../../contexts/OrdersContext";

export interface ConfirmationPageProps {}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { orderId } = useParams();
  const { orders } = useContext(OrdersContext);

  const lastOrder = orders.find((el) => el.id == orderId);

  return (
    <>
      <ConfirmationCard>
        <div className="left">
          <div>
            <h2>Uhu! Pedido confirmado</h2>
            <p>Agora é só aguardar que logo o café chegará até você </p>
          </div>
          <section>
            <div className="confirm-item">
              <IconCircle color={theme.purple[500]}>
                <MapPinIcon weight="fill" className="icon" />
              </IconCircle>
              <div>
                <p>
                  Entrega em{" "}
                  <b>
                    {lastOrder?.address?.street}, {lastOrder?.address?.number}
                  </b>
                </p>
                <p>
                  {lastOrder?.address?.district} - {lastOrder?.address?.city},{" "}
                  {lastOrder?.address?.state}
                </p>
              </div>
            </div>
            <div className="confirm-item">
              <IconCircle color={theme.yellow[500]}>
                <TimerIcon weight="fill" className="icon" />
              </IconCircle>

              <div>
                <p>Previsão de entrega</p>
                <p>
                  <b>20 min - 30 min</b>
                </p>
              </div>
            </div>
            <div className="confirm-item">
              <IconCircle color={theme.yellow[700]}>
                <CurrencyDollarIcon className="icon" />
              </IconCircle>
              <div>
                <p>Pagamento na entrega</p>
                <p>
                  <b>Cartão de Crédito</b>
                </p>
              </div>
            </div>
            <BackButton onClick={() => navigate("/")}>Voltar</BackButton>
          </section>
        </div>
        <img
          src="/assets/delivery.png"
          alt="Pessoa fazendo entrega em uma motoneta"
        />
      </ConfirmationCard>
    </>
  );
};
