import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.4rem;
`

export const Image = styled.img`
  display: block;
  width: 100%;
`

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  box-shadow: 0px 32px 80px rgba(0, 0, 0, 0.35);
  .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

      &.swiper-slide-active:first-child img {
        /* box-shadow: 0px 32px 80px rgba(0, 0, 0, 0.35); */
      }

      &:nth-child(2) {
        transition: transform 100ms;
      }

      &.swiper-slide-next:nth-child(2) {
        /* transform: translateX(55%); */
        z-index: 1;
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
  margin: 0 1.6rem;
`
