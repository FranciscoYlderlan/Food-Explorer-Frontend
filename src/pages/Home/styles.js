import styled from 'styled-components'

export const Container = styled.div``
export const Frame = styled.div`
  display: grid;
  align-content: center;
  justify-content: end;

  position: relative;

  height: clamp(12rem, 7.3333rem + 14.5833vw, 26rem);
  width: 100%;

  padding-left: 50%;
  padding-right: clamp(2rem, -0.6667rem + 8.3333vw, 10rem);
  margin: clamp(4rem, 0rem + 12.5vw, 16rem) 0 6rem 0;

  background: ${({ theme }) => theme.COLORS.GRADIENT_200};

  > img {
    position: absolute;

    height: clamp(15rem, 6.6667rem + 26.0417vw, 40rem);
    width: clamp(20rem, 6.6667rem + 41.6667vw, 60rem);

    bottom: 0;
    left: -15%;
  }

  > h1 {
    ${({ theme }) => theme.FONTS.POPPINS.SEMIBOLD_600}
  }
  > p {
    ${({ theme }) => theme.FONTS.POPPINS.REGULAR_100}

    font-size: clamp(0.8rem, 0.6182rem + 0.5682vw, 1.2rem);
  }
  @media ${({ theme }) => theme.DEVICES.laptop} {
    padding-left: 0;

    > h1 {
      ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_500}
    }
    > p {
      ${({ theme }) => theme.FONTS.ROBOTO.SMALL_SPACED}
    }
    > img {
      left: -10%;
    }
  }
`
