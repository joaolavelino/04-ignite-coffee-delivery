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
  display: flex;
  align-items: center;
  gap: 56px;
  width: 100%;
  padding: 0 10rem;
  overflow-y: hidden;
  margin: 5rem 0;

  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -100;
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
