import { ReactNode } from "react";
import { ButtonContainer, ButtonContainerProps } from "./styles";

export interface ButtonProps extends ButtonContainerProps {
  onClick?: () => void;
  type?: "button" | "submit";
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  type = "button",
  onClick,
  children,
}) => {
  return (
    <ButtonContainer variant={variant} type={type} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};
