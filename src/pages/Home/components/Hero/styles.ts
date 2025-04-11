import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 10rem;
  overflow-y: hidden;
  margin: 2rem 0;
  border: 1px solid green;
  gap: 5rem;

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
    @media screen and (max-width: 1120px) {
      width: 50%;
    }
  }

  .right {
    flex: 1;
    border: 1px solid red;
    img {
      width: 100%;
      max-width: 476px;
    }
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
export const PropsList = styled.div`
  display: flex;
  gap: 2rem;
  @media screen and (max-width: 1120px) {
    flex-direction: column;
  }

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
