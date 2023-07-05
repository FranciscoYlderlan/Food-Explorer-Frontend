import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

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

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  text-align: center;

  padding: 1.6rem 1.6rem 2.4rem;

  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  > svg {
    align-self: end;
    font-size: 2.4rem;
  }

  > img {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
  }

  h2 {
    ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100}

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    > span {
      ${({ theme }) => theme.FONTS.POPPINS.REGULAR_300}
    }
  }
  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    display: none;
  }
  @media ${({ theme }) => theme.DEVICES.tablet} {
    > svg {
    }
    > img {
    }
    h2 {
      ${({ theme }) => theme.FONTS.POPPINS.BOLD_300}
    }
    p {
      ${({ theme }) => theme.FONTS.ROBOTO.SMALLER_REGULAR}
      display: flex;
    }

    padding: 1.6rem 2.4rem 4.5rem;
  }
`
