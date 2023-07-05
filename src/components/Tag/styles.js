import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  border: none;
  border-radius: 0.5rem;
  padding: 0.4rem 0.8rem;

  ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100}

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`
