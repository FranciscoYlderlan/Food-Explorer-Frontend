import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  ${({ theme }) => theme.FONTS.ROBOTO.SMALL_REGULAR};
  bottom: -2rem;
  display: none;
  font-size: clamp(1.2rem, 1.0182rem + 0.5682vw, 1.6rem);
`
