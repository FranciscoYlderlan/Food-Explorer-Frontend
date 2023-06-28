import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 1.6rem;
  gap: 1.3rem;
  img {
    height: 7.2rem;
    width: 7.2rem;
    object-fit: cover;
  }
`
export const Col1 = styled.div`
  h4 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
  p {
    color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }
`
