import styled from 'styled-components'
import { TextLink } from '../../components/TextLink'
import { ListItems } from '../../components/ListItems'

export const Container = styled.div`
   h2 {
    ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_SPACED_100}
    margin-bottom: 3.2rem;
  }
  @media ${({ theme }) => theme.DEVICES.laptop} {
    gap: 3.2rem;
     h2 {
      ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400}
    }
`

export const TextLinkStyled = styled(TextLink)`
  ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_300}
  margin: 3.2rem 0 1.6rem;
  @media ${({ theme }) => theme.DEVICES.laptop} {
    margin: 2.4rem 0 4.2rem;
    ${({ theme }) => theme.FONTS.POPPINS.BOLD_300}
  }
`
export const ListItemsStyled = styled(ListItems)`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3.2rem;
  justify-content: flex-start;
`
