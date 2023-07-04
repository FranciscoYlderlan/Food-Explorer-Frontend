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
  display: flex;
  align-items: center;
  white-space: nowrap;

  gap: 1rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_700};
`
export const Copyright = styled.div`
  display: flex;
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
`
