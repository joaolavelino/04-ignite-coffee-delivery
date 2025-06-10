import {
  CoffeeIcon,
  PackageIcon,
  ShoppingCartIcon,
  TimerIcon,
} from "@phosphor-icons/react";
import { MenuCard } from "../../components/MenuCard";

import drinkList from "../../data-menu.json";
import { Banner, DrinkList, FeatureItem, StyledFeatureList } from "./styles";
import { useTheme } from "styled-components";

export interface MenuPageProps {}

export const MenuPage: React.FC<MenuPageProps> = () => {
  const theme = useTheme();

  const featuresList = [
    {
      icon: <ShoppingCartIcon weight="fill" />,
      text: "Compra simples e segura",
      color: theme.yellow[700],
    },

    {
      icon: <PackageIcon weight="fill" />,
      text: "Embalagem mantém o café intacto",
      color: theme.base.text,
    },
    {
      icon: <TimerIcon weight="fill" />,
      text: "Entrega rápida e rastreada",
      color: theme.yellow[500],
    },
    {
      icon: <CoffeeIcon weight="fill" />,
      text: "O café chega fresquinho até você",
      color: theme.purple[500],
    },
  ];
  return (
    <>
      <Banner>
        <div className="left">
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <StyledFeatureList>
            {featuresList.map((item) => (
              <FeatureItem color={item.color}>
                <div className="icon-container">{item.icon}</div>
                <p>{item.text}</p>
              </FeatureItem>
            ))}
          </StyledFeatureList>
        </div>
        <img src="/assets/banner-image.png" alt="" />
      </Banner>
      <h2>Menu</h2>
      <DrinkList>
        {drinkList.map((drink) => (
          <MenuCard key={drink.id} drink={drink} />
        ))}
      </DrinkList>
    </>
  );
};
