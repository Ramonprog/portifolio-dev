import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0 30px;

  & .container-skills {
    max-width: 1080px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    & h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 2.4rem;
      line-height: 2.9rem;
      text-transform: uppercase;
    }

    & .mySwiper {
      max-width: 100%;
      color: var(--primary-color);

      & svg {
        font-size: 7rem;
        margin-bottom: 40px;
        cursor: grab;

        & :hover {
          color: var(--secondary-color);
        }
      }

      & .swiper-pagination-clickable .swiper-pagination-bullet {
        background-color: var(--secondary-color);
      }
    }

    & .swiper-pagination-bullets {
      color: ${(props) => props.theme.colors.textColorSecondary};
    }
  }
`;
