import styled from 'styled-components'

export const Container = styled.div`
  > h2 {
    ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400}
    margin-bottom: 2rem;
  }
`
