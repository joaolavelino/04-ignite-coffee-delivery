import { ReactNode } from "react";
import { CircleContainer, CircleContainerProps } from "./styles";

export interface InconCircleProps extends CircleContainerProps {
  icon: ReactNode;
}

export const IconCircle: React.FC<InconCircleProps> = ({
  icon,
  color,
  iconColor = "white",
}) => {
  return (
    <CircleContainer color={color} iconColor={iconColor}>
      {icon}
    </CircleContainer>
  );
};
