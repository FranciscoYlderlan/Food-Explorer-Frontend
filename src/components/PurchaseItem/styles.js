import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 1.6rem;
  gap: 1.3rem;
  img {
    opacity: 0.8;
    height: 7.2rem;
    width: 7.2rem;
    object-fit: cover;
  }
`
export const Row1 = styled.div`
  display: flex;
  gap: 2rem;
`

export const Col1 = styled.div`
  display: grid;

  p {
    color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }
  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`
