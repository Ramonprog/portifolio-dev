import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  backdrop-filter: blur(2px);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(147, 88, 247);
  background: linear-gradient(
    174deg,
    rgba(147, 88, 247, 1) 0%,
    rgba(0, 101, 255, 0.9842275943396226) 0%,
    rgba(0, 172, 255, 0.918189858490566) 9%,
    rgba(0, 197, 252, 0.9244791666666666) 25%,
    rgba(9, 211, 237, 0.9402024371069182) 48%,
    rgba(16, 215, 226, 0.7012087264150944) 65%
  );
  opacity: 0;
  transition: 0.5s;
  transform: translateY(50px);
  pointer-events: none;

  & svg {
    position: absolute;
    width: 35px;
    top: 20px;
    right: 20px;
    cursor: pointer;
    transition: 0.7s;
    transform: rotate(180deg);
  }

  & nav ul {
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    gap: 30px;
    transform: scale(0.7);
    transition: 0.7;

    & li a {
      font-size: 2.5rem;
      color: #fff;
      transition: 0.3s;

      &:hover {
        border-bottom: 1px solid #101011;
      }
    }
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      pointer-events: auto;

      & svg {
        transform: rotate(0);
      }

      & nav ul {
        transform: scale(1);
      }
    `}
`;
