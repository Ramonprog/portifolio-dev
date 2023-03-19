import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 500px;
  background-color: ${(props) => props.theme.colors.primary};

  & .container-profile {
    max-width: 1080px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  & .image {
    display: flex;
    width: 367px;
    height: 367px;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-left: 5px solid var(--primary-color);
      border-radius: 4px 0px 0px 4px;
      border-radius: 50% 50% 34% 66% / 63% 22% 78% 87%;
    }
  }

  & .about {
    width: 500px;
    height: 400px;

    & h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 2.4rem;
      line-height: 2rem;
      text-transform: uppercase;
      margin: 40px 0;

      color: ${(props) => props.theme.colors.textColorPrimary};
    }

    & h3 {
      font-style: normal;
      font-weight: 500;
      font-size: 2rem;
      line-height: 2.4rem;
      color: ${(props) => props.theme.colors.textColorPrimary};
      margin-bottom: 20px;
    }

    & p {
      font-style: normal;
      font-weight: 300;
      font-size: 1.8rem;
      line-height: 3.2rem;
      color: ${(props) => props.theme.colors.textColorSecondary};
    }

    & .container-links {
      margin-top: 40px;
      & a {
        margin-right: 48px;
      }
    }
  }

  @media (max-width: 850px) {
    & .container-profile {
      justify-content: center;
      gap: 20px;
    }

    & .image {
      margin-top: 20px;
    }

    & .about {
      text-align: center;
    }
  }

  @media (max-width: 400px) {
    & .about {
      & h2 {
        margin-top: 0;
      }

      & .container-links {
        & a {
          margin: 5px;
        }
      }
    }

    & .image {
      & img {
        width: 80%;
        height: 80%;
        margin: 0 auto;
      }
    }
  }
`;
