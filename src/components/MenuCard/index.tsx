import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { Drink } from "../../@types/types";
import { Button } from "../button";
import { useState } from "react";
import { MenuCardContainer } from "./styles";

export interface MenuCardProps {
  drink: Drink;
}

export const MenuCard: React.FC<MenuCardProps> = ({ drink }) => {
  console.log(drink);
  const [quantity, setQuantity] = useState(1);

  const oneMore = () => {
    setQuantity((state) => state + 1);
  };
  const oneLess = () => {
    if (quantity > 0) setQuantity((state) => state - 1);
  };

  const handleAddToCart = () => {
    window.alert(`${quantity} ${drink.name} foi adicionado ao carrinho!`);
    setQuantity(1);
  };

  return (
    <MenuCardContainer>
      <img src={drink.imageUrl} alt="" />
      <div className="content">
        <div className="tagList">
          {drink.tags.map((tag) => (
            <div key={tag}>{tag}</div>
          ))}
        </div>

        <h3 className="name">{drink.name}</h3>

        <p className="description">{drink.description}</p>

        <footer>
          <p>
            R$ <strong className="price">{drink.price.toFixed(2)}</strong>
          </p>
          <div className="buttons">
            <div className="selector">
              <button onClick={oneLess} disabled={quantity == 1}>
                <Minus />
              </button>
              <p>{quantity}</p>
              <button onClick={oneMore}>
                <Plus />
              </button>
            </div>
            <Button
              variant="icon"
              onClick={handleAddToCart}
              disabled={quantity == 0}
            >
              <ShoppingCartSimple weight="fill" />
            </Button>
          </div>
        </footer>
      </div>
    </MenuCardContainer>
  );
};
