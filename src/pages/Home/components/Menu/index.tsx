import { MenuCard } from "../../../../components/MenuCard";
import drinksJson from "../../../../data-menu.json";
import { DrinkGrid, MenuContainer } from "./styles";

export const DrinkMenu: React.FC = () => {
  const drinkList = drinksJson;

  return (
    <MenuContainer>
      <h2>Nossas bebidas</h2>
      <DrinkGrid>
        {drinkList.map((drink) => (
          <MenuCard drink={drink} key={drink.id} />
        ))}
      </DrinkGrid>
    </MenuContainer>
  );
};
