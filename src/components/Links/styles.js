import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 0 20px;
  height: 400px;

  & .containerText {
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  & .left {
    width: 50%;
    color: ${(props) => props.theme.colors.textColorPrimary};
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 2.4rem;
      line-height: 2.9rem;
      text-transform: uppercase;
    }

    & h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 5.4rem;
      line-height: 7.7rem;
      text-transform: uppercase;
      margin: 12px 0;
      color: var(--primary-color);
    }

    & span {
      font-style: normal;
      font-weight: 600;
      font-size: 2.4rem;
      line-height: 2.9rem;
      text-align: justify;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    & .buttons-links {
      margin-top: 30px;
    }
  }

  & .right {
    width: 50%;

    & img {
      width: 100%;
    }
  }

  & .container-links a {
    margin-right: 20px;
  }

  @media (max-width: 1000px) {
    height: 400px;

    & .left {
      width: 100%;
      align-items: center;
      margin-top: 50px;
    }

    & .right {
      display: none;
    }
  }

  @media (max-width: 430px) {
    & .left {
      & h1 {
        font-size: 4.3rem;
      }

      & span {
        font-size: 1.9rem;
      }

      & .container-links a {
        margin-right: 5px;
      }
    }
  }
`;
