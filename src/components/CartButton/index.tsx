import { useNavigate } from "react-router-dom";
import { IconButton } from "../IconButton";
import { ShoppingCartIcon } from "@phosphor-icons/react";
import { CartButtonContainer, NumberContainer } from "./styles";

export interface CartButtonProps {}

export const CartButton: React.FC<CartButtonProps> = () => {
  const navigate = useNavigate();

  return (
    <CartButtonContainer>
      <NumberContainer>3</NumberContainer>
      <IconButton onClick={() => navigate("/checkout")} color="yellow">
        <ShoppingCartIcon weight="fill" />
      </IconButton>
    </CartButtonContainer>
  );
};
