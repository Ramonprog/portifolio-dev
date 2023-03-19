import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};

  & .container-projects {
    max-width: 1080px;
    margin: 0 auto;
    flex-wrap: wrap;

    & .title {
      font-style: normal;
      font-weight: 600;
      font-size: 2.4rem;
      line-height: 2.9rem;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.textColorPrimary};
      padding-top: 40px;
    }

    & .projects {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      & .project {
        width: 430px;
        margin: 40px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & img {
          width: 100%;
          height: 450px;
          border-left: 5px solid var(--primary-color);
          border-radius: 4px 0px 0px 4px;
        }

        & h3 {
          font-style: normal;
          font-weight: 500;
          font-size: 2.4rem;
          line-height: 2.9rem;
          color: ${(props) => props.theme.colors.textColorPrimary};
          margin: 20px 0;
        }

        & p {
          font-style: normal;
          font-weight: 300;
          font-size: 1.6rem;
          line-height: 2.6rem;
          color: ${(props) => props.theme.colors.textColorSecondary};
          margin-bottom: 40px;
        }

        & .links a {
          margin: 20px 20px 0 0;
        }
      }
    }
  }

  @media (max-width: 850px) {
    & .container-projects {
      & .projects {
        justify-content: center;
        padding: 0 15px;
      }
    }
  }

  @media (max-width: 400px) {
    & .container-projects {
      & .projects {
        & .project {
          & .links a {
            margin: 5px;
          }
        }
      }
    }
  }
`;
