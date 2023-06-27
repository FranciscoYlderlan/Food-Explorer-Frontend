import React from 'react'
import { Container, Image, StyledSwiper, StyledSwiperSlide } from './styles.js'

import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SwiperCore, { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper'

SwiperCore.use([Keyboard, Scrollbar, Navigation, Pagination])

export function Carousel() {
  return (
    <Container>
      <StyledSwiper
        slidesPerView={2}
        centeredSlides={false}
        slidesPerGroupSkip={2}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <StyledSwiperSlide>
          <Image
            src="https://cdn.magloft.com/github/swiper/images/page-001.jpg"
            alt="exemplo"
          />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Image
            src="https://cdn.magloft.com/github/swiper/images/page-002.jpg"
            alt="exemplo"
          />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Image
            src="https://cdn.magloft.com/github/swiper/images/page-003.jpg"
            alt="exemplo"
          />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Image
            src="https://cdn.magloft.com/github/swiper/images/page-004.jpg"
            alt="exemplo"
          />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Image
            src="https://cdn.magloft.com/github/swiper/images/page-005.jpg"
            alt="exemplo"
          />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Image
            src="https://cdn.magloft.com/github/swiper/images/page-006.jpg"
            alt="exemplo"
          />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Image
            src="https://cdn.magloft.com/github/swiper/images/page-007.jpg"
            alt="exemplo"
          />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Image
            src="https://cdn.magloft.com/github/swiper/images/page-008.jpg"
            alt="exemplo"
          />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Image
            src="https://cdn.magloft.com/github/swiper/images/page-009.jpg"
            alt="exemplo"
          />
        </StyledSwiperSlide>
      </StyledSwiper>
    </Container>
  )
}
