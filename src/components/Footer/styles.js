import styled from "styled-components";

export const ContainerFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.primary};

  & .container-footer {
    max-width: 1080px;
    height: 100px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    & p {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
      color: ${(props) => props.theme.colors.textColorSecondary};
      padding: 0 20px;

      & span {
        color: var(--primary-color);
      }
    }
  }
`;
