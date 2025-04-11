import styled from "styled-components";

export const MenuContainer = styled.section`
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
    font-family: "Baloo 2", sans-serif;
  }
`;

export const DrinkGrid = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;
