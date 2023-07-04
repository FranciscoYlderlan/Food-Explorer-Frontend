import styled from 'styled-components'

export const Container = styled.footer`
  grid-area: footer;
  display: flex;
  height: fit-content;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  padding: 2.4rem clamp(3rem, 0.7273rem + 7.1023vw, 8rem);
`
export const Logo = styled.div`
  ${({ theme }) => theme.FONTS.ROBOTO.SMALLER_REGULAR}
  display: flex;
  align-items: center;
  white-space: nowrap;

  gap: 1rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_700};

  @media ${({ theme }) => theme.DEVICES.laptop} {
    ${({ theme }) => theme.FONTS.ROBOTO.BIGGER_BOLD}
  }
`
export const Copyright = styled.div`
  ${({ theme }) => theme.FONTS.ROBOTO.SMALLEST_REGULAR}
  font-size: clamp(0.8rem, 0.6182rem + 0.5682vw, 1.2rem);
  display: flex;
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  @media ${({ theme }) => theme.DEVICES.laptop} {
    ${({ theme }) => theme.FONTS.ROBOTO.SMALLER_REGULAR}
  }
`
