import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.8rem;
  padding: 1.6rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
`
