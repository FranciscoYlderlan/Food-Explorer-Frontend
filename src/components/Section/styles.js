import styled from 'styled-components'

export const Container = styled.div`
  > h2 {
    ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_150}
    margin-bottom: 2rem;
  }
  @media ${({ theme }) => theme.DEVICES.laptop} {
    > h2 {
      ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400}
    }
  }
`
