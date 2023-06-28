import React from 'react'
import { Container, StyledSwiper, StyledSwiperSlide, Card } from './styles.js'
import { AddItem } from '../AddItem'

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
        rewind={true}
        slideShadows={true}
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
          <Card>
            <img
              src="https://st.depositphotos.com/1003814/4626/i/600/depositphotos_46267763-stock-photo-fried-chicken-fillets.jpg"
              alt="prato"
            />
            <h2>Frango Grelhado</h2>
            <p>Frango gratinado ao oleo e sal com uma salada de repolho</p>
            <AddItem />
          </Card>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Card>
            <img
              src="https://st.depositphotos.com/1003814/4626/i/600/depositphotos_46267763-stock-photo-fried-chicken-fillets.jpg"
              alt="prato"
            />
            <h2>Frango Grelhado</h2>
            <p>Frango gratinado ao oleo e sal com uma salada de repolho</p>
            <AddItem />
          </Card>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Card>
            <img
              src="https://st.depositphotos.com/1003814/4626/i/600/depositphotos_46267763-stock-photo-fried-chicken-fillets.jpg"
              alt="prato"
            />
            <h2>Frango Grelhado</h2>
            <p>Frango gratinado ao oleo e sal com uma salada de repolho</p>
            <AddItem />
          </Card>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Card>
            <img
              src="https://st.depositphotos.com/1003814/4626/i/600/depositphotos_46267763-stock-photo-fried-chicken-fillets.jpg"
              alt="prato"
            />
            <h2>Frango Grelhado</h2>
            <p>Frango gratinado ao oleo e sal com uma salada de repolho</p>
            <AddItem />
          </Card>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Card>
            <img
              src="https://st.depositphotos.com/1003814/4626/i/600/depositphotos_46267763-stock-photo-fried-chicken-fillets.jpg"
              alt="prato"
            />
            <h2>Frango Grelhado</h2>
            <p>Frango gratinado ao oleo e sal com uma salada de repolho</p>
            <AddItem />
          </Card>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Card>
            <img
              src="https://st.depositphotos.com/1003814/4626/i/600/depositphotos_46267763-stock-photo-fried-chicken-fillets.jpg"
              alt="prato"
            />
            <h2>Frango Grelhado</h2>
            <p>Frango gratinado ao oleo e sal com uma salada de repolho</p>
            <AddItem />
          </Card>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Card>
            <img
              src="https://st.depositphotos.com/1003814/4626/i/600/depositphotos_46267763-stock-photo-fried-chicken-fillets.jpg"
              alt="prato"
            />
            <h2>Frango Grelhado</h2>
            <p>Frango gratinado ao oleo e sal com uma salada de repolho</p>
            <AddItem />
          </Card>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Card>
            <img
              src="https://st.depositphotos.com/1003814/4626/i/600/depositphotos_46267763-stock-photo-fried-chicken-fillets.jpg"
              alt="prato"
            />
            <h2>Frango Grelhado</h2>
            <p>Frango gratinado ao oleo e sal com uma salada de repolho</p>
            <AddItem />
          </Card>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Card>
            <img
              src="https://st.depositphotos.com/1003814/4626/i/600/depositphotos_46267763-stock-photo-fried-chicken-fillets.jpg"
              alt="prato"
            />
            <h2>Frango Grelhado</h2>
            <p>Frango gratinado ao oleo e sal com uma salada de repolho</p>
            <AddItem />
          </Card>
        </StyledSwiperSlide>
      </StyledSwiper>
    </Container>
  )
}
