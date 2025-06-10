import {
  CurrencyDollarIcon,
  MapPinIcon,
  TimerIcon,
} from "@phosphor-icons/react";
import { BackButton, ConfirmationCard, IconCircle } from "./styles";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

export interface ConfirmationPageProps {}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = () => {
  const theme = useTheme();
  const navigate = useNavigate();
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
                  Entrega em <b>Rua do Destinatário, 234</b>
                </p>
                <p>Bairro - Cidade, Estado</p>
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
