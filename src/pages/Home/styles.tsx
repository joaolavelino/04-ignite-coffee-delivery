import styled from "styled-components";

export const PropsList = styled.div`
  display: flex;
  gap: 2rem;

  .column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .line {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;

export const Hero = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 56px;

  .bg {
    position: absolute;
  }

  .left {
    width: 588px;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2 {
      font-family: "Baloo 2", sans-serif;
      font-size: 3rem;
      line-height: 3.5rem;
    }
  }
`;
