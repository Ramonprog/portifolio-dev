import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 400px;
  background-color: ${(props) => props.theme.colors.secondary};

  & .container-academic {
    max-width: 1080px;
    height: 100%;
    margin: 0 auto;

    & .title {
      padding: 93px 0 26px 0;
    }

    & .info {
      display: flex;

      & .school p {
        padding: 15px 32px;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.2rem;
        color: ${(props) => props.theme.colors.textColorSecondary};
        margin-right: 100px;
        cursor: pointer;

        &:hover {
          color: ${(props) => props.theme.colors.textColorPrimary};
          border-left: 3px solid var(--primary-color);
          border-radius: 4px 0px 0px 4px;
          background-color: ${(props) => props.theme.colors.primary};
        }
      }

      & .details {
        width: 600px;
        font-weight: 300;
        font-size: 1.8rem;
        line-height: 2.8rem;
        color: ${(props) => props.theme.colors.textColorSecondary};

        & p {
          margin-bottom: 26px;
        }

        & .name {
          color: var(--secondary-color);
        }
      }

      & .active {
        color: ${(props) => props.theme.colors.textColorPrimary} !important;
        border-left: 3px solid var(--primary-color);
        border-radius: 4px 0px 0px 4px;
        background-color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  @media (max-width: 800px) {
    margin-top: 60px;
  }
  @media (max-width: 700px) {
    & .info {
      flex-direction: column;

      & .details {
        max-width: 100%;
        & p {
          margin-right: 0 !important;
          padding: 0 20px;
        }
      }
    }
  }

  @media (max-width: 430px) {
    & .info {
      & .details {
        max-width: 100vw;
        & p {
          margin: 0;
        }
      }
    }
  }
`;
