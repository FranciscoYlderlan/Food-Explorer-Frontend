import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 0 0 10px 10px;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.8rem;
  padding: 1.6rem;
  cursor: pointer;
  ${({ theme }) => theme.FONTS.ROBOTO.SMALL_REGULAR};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
`
