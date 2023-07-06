import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.8rem;
  padding: 1.6rem;
  cursor: pointer;
  ${({ theme }) => theme.FONTS.ROBOTO.SMALLER_REGULAR}
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
`
