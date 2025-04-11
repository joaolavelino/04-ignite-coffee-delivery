import { ButtonContainer, ButtonContainerProps } from "./styles";

export interface ButtonProps extends ButtonContainerProps {
  variant?: "primary" | "secondary" | "icon" | "cart";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...rest
}) => {
  return (
    <ButtonContainer variant={variant} {...rest}>
      {children}
    </ButtonContainer>
  );
};
