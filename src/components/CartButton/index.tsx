import { useNavigate } from "react-router-dom";
import { IconButton } from "../IconButton";
import { ShoppingCartIcon } from "@phosphor-icons/react";
import { CartButtonContainer, NumberContainer } from "./styles";
import { OrdersContext } from "../../contexts/OrdersContext";
import { useContext } from "react";

export interface CartButtonProps {}

export const CartButton: React.FC<CartButtonProps> = () => {
  const navigate = useNavigate();
  const { currentOrder } = useContext(OrdersContext);
  let quantityOnCart = 0;
  currentOrder.drinks.forEach((item) => (quantityOnCart += item.quantity));

  return (
    <CartButtonContainer>
      <NumberContainer quantity={+quantityOnCart}>
        {quantityOnCart}
      </NumberContainer>
      <IconButton onClick={() => navigate("/checkout")} color="yellow">
        <ShoppingCartIcon weight="fill" />
      </IconButton>
    </CartButtonContainer>
  );
};
