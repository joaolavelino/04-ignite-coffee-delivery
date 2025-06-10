import type { ReactNode } from "react";
import type React from "react";
import { StyledIconButton } from "./styles";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: () => void;
  color: "purple" | "yellow";
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  onClick,
  ...props
}) => {
  return (
    <StyledIconButton onClick={onClick} {...props}>
      {children}
    </StyledIconButton>
  );
};
