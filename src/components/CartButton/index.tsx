import { useNavigate } from "react-router-dom";
import { IconButton } from "../IconButton";
import { ShoppingCartIcon } from "@phosphor-icons/react";
import { CartButtonContainer, NumberContainer } from "./styles";
import { OrdersContext } from "../../contexts/OrdersContext";
import { useContext } from "react";

export interface CartButtonProps {}

export const CartButton: React.FC<CartButtonProps> = () => {
  const navigate = useNavigate();
  const { orders } = useContext(OrdersContext);

  return (
    <CartButtonContainer>
      <NumberContainer number={orders.length}>{orders.length}</NumberContainer>
      <IconButton onClick={() => navigate("/checkout")} color="yellow">
        <ShoppingCartIcon weight="fill" />
      </IconButton>
    </CartButtonContainer>
  );
};
