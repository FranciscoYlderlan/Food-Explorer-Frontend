import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { RiPencilFill } from 'react-icons/ri'
export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.4rem 0 2.4rem 0;
`

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  position: relative;
  /* overflow: visible; */
  &:before {
    left: 0;
    content: '';
    position: absolute;
    width: inherit;
    height: 100%;
    z-index: 2;
    pointer-events: none;
    background: linear-gradient(
      90deg,
      rgba(0, 10, 15, 0.9) 0%,
      rgba(0, 10, 15, 0.1) 20%,
      rgba(0, 10, 15, 0.1) 80%,
      rgba(0, 10, 15, 0.9) 100%
    );
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    width: 21rem;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    position: relative;

    @media only screen and (min-width: 769px) {
      &:first-child {
        transition: transform 100ms;
      }

      &:first-child img {
        transition: box-shadow 500ms;
      }

      &.swiper-slide-active:first-child {
        /* transform: translateX(50%); */
        z-index: 2;
      }

      &.swiper-slide-active:first-child {
        /* box-shadow: 0px 32px 80px rgba(0, 0, 0, 0.35); */
        z-index: 1;
      }

      &:nth-child(2) {
        transition: transform 100ms;
      }

      &.swiper-slide-next:nth-child(2) {
        /* transform: translateX(55%); */
        /* box-shadow: 0px 80px 32px rgba(0, 0, 0, 0.75); */
        z-index: 2;
      }

      &[dir='rtl'] &.swiper-slide-active:first-child {
        transform: translateX(-50%);
      }

      &[dir='rtl'] &.swiper-slide-next:nth-child(2) {
        transform: translateX(-55%);
      }
    }
    @media ${({ theme }) => theme.DEVICES.laptop} {
      width: 30rem;
    }
  }
`
export const StyledSwiperSlide = styled(SwiperSlide)`
  padding: 0 0.8rem;
`
export const Image = styled.img`
  display: flex;
  width: 100%;
`
export const Card = styled.div`
  width: 100%;
  min-height: 30rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;

  text-align: center;

  padding: 1.6rem 1.6rem 2.4rem;

  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  > svg {
    flex-shrink: 0;
    align-self: end;
  }

  > img {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    border-radius: 50%;
  }

  h2 {
    ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100}

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    display: none;
  }
  @media ${({ theme }) => theme.DEVICES.tablet} {
    > img {
      width: 16rem;
      height: 16rem;
    }

    h2 {
      ${({ theme }) => theme.FONTS.POPPINS.BOLD_300}
    }
    p {
      ${({ theme }) => theme.FONTS.ROBOTO.SMALLER_REGULAR}
      display: flex;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: inherit;
      text-align: center;
    }
    min-height: 46rem;
    gap: 1.5rem;
    padding: 1.6rem 2.4rem 4.5rem;
  }
`

export const StyledRiPencilFill = styled(RiPencilFill)`
  fill: transparent; /* Cor de preenchimento */
  width: 3.4rem; /* Tamanho */
  height: 3.4rem; /* Tamanho */
  stroke-width: 1px; /* Largura do contorno */
  stroke: white; /* Cor do contorno */
  transition: all 0.3s;
  &:hover {
    stroke-width: 0;
    fill: white;
    cursor: pointer;
  }
`
export const HeartContainer = styled.div`
  display: flex;
  position: relative;
  align-self: end;

  > svg:first-child {
    fill: ${({ theme, isFavorite }) =>
      isFavorite ? 'transparent' : theme.COLORS.LIGHT_300};
    order: 1;
    z-index: 2;
    transition: fill 0.3s;
    /* pointer-events: none; */
  }

  > svg:last-child {
    fill: ${({ theme, isFavorite }) =>
      isFavorite ? theme.COLORS.TOMATO_300 : 'transparent'};
    order: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    transition: fill 0.3s;
  }

  &:hover {
    cursor: pointer;
    > svg:first-child {
      fill: transparent;
    }
    > svg:last-child {
      fill: ${({ theme }) => theme.COLORS.TOMATO_300};
    }
  }
`

export const TextIcon = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  > span {
    flex-shrink: 0;
    font-size: 2.4rem;
    line-height: 100%;
  }
  &:hover {
    cursor: pointer;
  }
  ${({ theme }) => theme.FONTS.POPPINS.REGULAR_300}
  @media ${({ theme }) => theme.DEVICES.laptop} {
    > span {
      font-size: 4.8rem;
    }
  }
`
