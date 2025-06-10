import { ShoppingCartIcon } from "@phosphor-icons/react";
import { useState } from "react";
import type { DrinkType } from "../../@types/types";
import { IconButton } from "../IconButton";
import { QuantitySelector } from "../QuantitySelector";
import { StyledCard } from "./styles";

export interface MenuCardProps {
  drink: DrinkType;
}

export const MenuCard: React.FC<MenuCardProps> = ({ drink }) => {
  const [quantity, setQuantity] = useState<number>(1);

  function addOne() {
    setQuantity((state) => state + 1);
  }

  function removeOne() {
    if (quantity > 0) setQuantity((state) => state - 1);
  }

  function addToCart() {
    console.log("added");
  }

  return (
    <StyledCard>
      <img src={drink.imageUrl} alt={drink.name} />
      <div className="tag-list">
        {drink.tags.map((tag) => (
          <p className="tag" key={tag}>
            {tag}
          </p>
        ))}
      </div>
      <h3>{drink.name}</h3>
      <p>{drink.description}</p>
      <footer>
        <div className="price">
          <p>R$</p>
          <h4>{drink.price.toFixed(2)}</h4>
        </div>
        <div className="buttons">
          <QuantitySelector
            addOne={addOne}
            removeOne={removeOne}
            quantity={quantity}
          />
          <IconButton color="purple" onClick={addToCart}>
            <ShoppingCartIcon weight="fill" />
          </IconButton>
        </div>
      </footer>
    </StyledCard>
  );
};
