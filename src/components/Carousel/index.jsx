import React from 'react'
import {
  Container,
  StyledSwiper,
  StyledSwiperSlide,
  Card,
  TextIcon,
} from './styles.js'
import { AddItem } from '../AddItem'
import { RiPencilFill } from 'react-icons/ri'
// import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
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
            slidesPerGroup: 3,
            centeredSlides: false,
          },
          1140: {
            slidesPerView: 4,
            slidesPerGroup: 4,
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
        <StyledSwiperSlide>
          <Card>
            <RiPencilFill
              size={38}
              fill="transparent"
              stroke="white"
              strokeWidth={1}
            />
            {/* <AiFillHeart size={32} /> */}
            {/* <AiOutlineHeart size={32} /> */}
            <img
              src="https://st.depositphotos.com/1003814/4626/i/600/depositphotos_46267763-stock-photo-fried-chicken-fillets.jpg"
              alt="prato"
            />
            <TextIcon>
              <h2>Frango Grelhadassosão com manteiga</h2>
              <span>&#8250;</span>
            </TextIcon>

            <p>Frango gratinado ao oleo e sal com uma salada de repolho</p>
            <AddItem />
          </Card>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Card>
            <RiPencilFill
              size={32}
              fill="transparent"
              stroke="white"
              strokeWidth={1}
            />
            {/* <AiFillHeart size={32} />
            <AiOutlineHeart size={32} /> */}
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
            <RiPencilFill
              size={32}
              fill="transparent"
              stroke="white"
              strokeWidth={1}
            />
            {/* <AiFillHeart size={32} />
            <AiOutlineHeart size={32} /> */}
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
            <RiPencilFill
              size={32}
              fill="transparent"
              stroke="white"
              strokeWidth={1}
            />
            {/* <AiFillHeart size={32} />
            <AiOutlineHeart size={32} /> */}
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
            <RiPencilFill
              size={32}
              fill="transparent"
              stroke="white"
              strokeWidth={1}
            />
            {/* <AiFillHeart size={32} />
            <AiOutlineHeart size={32} /> */}
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
            <RiPencilFill
              size={32}
              fill="transparent"
              stroke="white"
              strokeWidth={1}
            />
            {/* <AiFillHeart size={32} />
            <AiOutlineHeart size={32} /> */}
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
            <RiPencilFill
              size={32}
              fill="transparent"
              stroke="white"
              strokeWidth={1}
            />
            {/* <AiFillHeart size={32} />
            <AiOutlineHeart size={32} /> */}
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
            <RiPencilFill
              size={32}
              fill="transparent"
              stroke="white"
              strokeWidth={1}
            />
            {/* <AiFillHeart size={32} />
            <AiOutlineHeart size={32} /> */}
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
            <RiPencilFill
              size={32}
              fill="transparent"
              stroke="white"
              strokeWidth={1}
            />
            {/* <AiFillHeart size={32} />
            <AiOutlineHeart size={32} /> */}
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
            <RiPencilFill
              size={32}
              fill="transparent"
              stroke="white"
              strokeWidth={1}
            />
            {/* <AiFillHeart size={32} />
            <AiOutlineHeart size={32} /> */}
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
