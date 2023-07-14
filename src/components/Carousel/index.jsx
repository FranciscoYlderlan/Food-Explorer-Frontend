import React from 'react'
import {
  Container,
  StyledSwiper,
  StyledSwiperSlide,
  Card,
  TextIcon,
  StyledRiPencilFill,
  HeartContainer,
} from './styles.js'
import { AddItem } from '../AddItem'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SwiperCore, { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper'

import { useAuth } from '../../hooks/auth'

SwiperCore.use([Keyboard, Scrollbar, Navigation, Pagination])

export function Carousel({ data }) {
  const { isAnAdmin } = useAuth()
  console.log(data)
  return (
    <Container>
      <StyledSwiper
        rewind={true}
        slidesPerView="auto"
        centeredSlides={true}
        slidesPerGroupSkip={2}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          680: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            centeredSlides: false,
          },
          1140: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            centeredSlides: false,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {data &&
          data.map((dish, index) => {
            return (
              <StyledSwiperSlide key={index}>
                <Card>
                  {isAnAdmin() ? (
                    <StyledRiPencilFill />
                  ) : (
                    <HeartContainer isFavorite={!!dish.isFavorite}>
                      <AiOutlineHeart size={32} />
                      <AiFillHeart size={32} />
                    </HeartContainer>
                  )}

                  <img
                    src="https://st.depositphotos.com/1003814/4626/i/600/depositphotos_46267763-stock-photo-fried-chicken-fillets.jpg"
                    alt="prato"
                  />
                  <TextIcon>
                    <h2>{dish.name}</h2>
                    <span>&#8250;</span>
                  </TextIcon>

                  <p>{dish.description}</p>
                  <AddItem isAdmin={isAnAdmin()} />
                </Card>
              </StyledSwiperSlide>
            )
          })}
      </StyledSwiper>
    </Container>
  )
}
