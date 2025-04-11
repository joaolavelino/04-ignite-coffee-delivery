import { ShoppingCart } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Button } from "../button";
import { CartButtonContainer } from "./styles";

export interface CartButtonProps {
  number?: number;
}

export const CartButton: React.FC<CartButtonProps> = ({ number = 0 }) => {
  const [isFloat, setIsFloat] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", handleCartButtonPosition);
    return () => {
      window.removeEventListener("scroll", handleCartButtonPosition);
    };
  });

  const handleCartButtonPosition = () => {
    window.scrollY > 75 ? setIsFloat(true) : setIsFloat(false);
  };

  return (
    <CartButtonContainer float={isFloat}>
      {number > 0 && <div className="quantityBox">{number}</div>}
      <Button variant="cart">
        <ShoppingCart weight="fill" />
      </Button>
    </CartButtonContainer>
  );
};
