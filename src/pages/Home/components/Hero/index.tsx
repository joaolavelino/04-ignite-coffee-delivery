import heroImg from "../../../../../public/assets/banner-image.png";
import heroBG from "../../../../../public/assets/banner-bg.png";
import { HeroContainer, PropsList } from "./styles";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { IconCircle } from "../../../../components/IconCircle";
import { useTheme } from "styled-components";

export const Hero: React.FC = () => {
  const { yellowDark, yellow, purple, baseText } = useTheme();
  return (
    <HeroContainer>
      <img src={heroBG} alt="" className="bg" />
      <div className="left">
        <div className="title">
          <h2>Finden Sie den perfekten Kaffee für jeden moment</h2>
          <p>
            Mit Coffee Delivery bekommen Sie Ihren Kaffe wo Sie sind. Irgendwo.
            Irgendwann.
          </p>
        </div>

        <PropsList>
          <div className="column">
            <div className="line">
              <IconCircle
                color={yellowDark}
                icon={<ShoppingCart weight="fill" />}
              />
              Einfacher und sicherer Kauf
            </div>
            <div className="line">
              <IconCircle color={yellow} icon={<Timer weight="fill" />} />
              Schnelle und nachverfolgbare Lieferung
            </div>
          </div>
          <div className="column">
            <div className="line">
              <IconCircle color={baseText} icon={<Package weight="fill" />} />
              Verpackung hält den Kaffee intakt
            </div>
            <div className="line">
              <IconCircle color={purple} icon={<Coffee weight="fill" />} />
              Der Kaffee kommt frish zu Ihnen
            </div>
          </div>
        </PropsList>
      </div>
      <div className="right">
        <img src={heroImg} alt="coffee cup with grains on a yellow BG" />
      </div>
    </HeroContainer>
  );
};
