import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  > svg {
    flex-shrink: 0;
    height: clamp(1.2rem, 1.0182rem + 0.5682vw, 1.6rem);
    width: clamp(0.8rem, 1.0182rem + 0.5682vw, 1.2rem);
  }
  ${({ theme }) => theme.FONTS.ROBOTO.SMALL_REGULAR};
  bottom: -2rem;
  display: none;
  font-size: clamp(1.2rem, 1.0182rem + 0.5682vw, 1.6rem);
`
