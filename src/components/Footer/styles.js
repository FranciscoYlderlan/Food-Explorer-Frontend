import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  padding: 2.4rem 12rem;
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
