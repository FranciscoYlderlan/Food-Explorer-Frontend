import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.4rem;
`

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: fit-content;
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
  .swiper-slide {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    position: relative;

    img {
      display: block;
      width: 100%;
    }

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
        box-shadow: 0px 32px 80px rgba(0, 0, 0, 0.35);
        z-index: 1;
      }

      &:nth-child(2) {
        transition: transform 100ms;
      }

      &.swiper-slide-next:nth-child(2) {
        /* transform: translateX(55%); */
        box-shadow: 0px 80px 32px rgba(0, 0, 0, 0.75);
        z-index: 2;
      }

      &[dir='rtl'] &.swiper-slide-active:first-child {
        transform: translateX(-50%);
      }

      &[dir='rtl'] &.swiper-slide-next:nth-child(2) {
        transform: translateX(-55%);
      }
    }
  }
`
export const StyledSwiperSlide = styled(SwiperSlide)`
  padding: 0 0.8rem;
`
export const Image = styled.img`
  display: block;
  width: 100%;
`
