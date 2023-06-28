import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  padding: 2.4rem 12rem;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`
