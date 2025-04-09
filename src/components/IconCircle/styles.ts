import styled from "styled-components";

export interface CircleContainerProps {
  color: string;
  iconColor?: string;
}

export const CircleContainer = styled.div<CircleContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  max-width: 2rem;
  max-height: 2rem;
  min-width: 2rem;
  min-height: 2rem;
  background-color: ${({ color }) => color};
  color: ${({ iconColor }) => iconColor};
  border-radius: 50%;
`;
