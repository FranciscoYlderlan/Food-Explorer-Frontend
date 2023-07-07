import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 1.3rem;
  img {
    opacity: 0.8;
    height: 7.2rem;
    width: 7.2rem;
    object-fit: cover;
  }
  h4 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_200}
  }
  span {
    ${({ theme }) => theme.FONTS.ROBOTO.SMALLEST_REGULAR}
  }
  p {
    ${({ theme }) => theme.FONTS.ROBOTO.SMALLEST_REGULAR}
  }
`
export const Row1 = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const Col1 = styled.div`
  display: grid;

  p {
    color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }
  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`
