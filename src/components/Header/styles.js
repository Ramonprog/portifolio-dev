import styled from "styled-components";

export const Container = styled.header`
  max-width: 1080px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  & .logo {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 2.9rem;
    color: var(--primary-color);
  }

  & nav ul {
    display: flex;
    width: 100%;

    & li a {
      color: ${(props) => props.theme.colors.textColorPrimary};
      font-weight: 300;
      font-size: 1.6rem;
      line-height: 2.6rem;
      margin-left: 32px;
    }
  }

  & .toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & svg {
      margin: 0 8px;
      font-size: 2rem;
    }
  }
`;
