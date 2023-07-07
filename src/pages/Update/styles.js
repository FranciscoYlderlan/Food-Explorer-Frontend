import styled from 'styled-components'
import { TextLink } from '../../components/TextLink'

export const Container = styled.div``

export const TextLinkStyled = styled(TextLink)`
  ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_300}
  margin: 3.2rem 0 1.6rem;
  @media ${({ theme }) => theme.DEVICES.laptop} {
    margin: 2.4rem 0 4.2rem;
    ${({ theme }) => theme.FONTS.POPPINS.BOLD_300}
  }
`
