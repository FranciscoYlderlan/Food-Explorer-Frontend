import styled from 'styled-components'
import { TextLink } from '../../components/TextLink'
import { ListItems } from '../../components/ListItems'
export const Container = styled.div``

export const TextLinkStyled = styled(TextLink)`
  ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_300}
  margin: 3.2rem 0 1.6rem;
  @media ${({ theme }) => theme.DEVICES.laptop} {
    margin: 2.4rem 0 4.2rem;
    ${({ theme }) => theme.FONTS.POPPINS.BOLD_300}
  }
`

export const CartStyled = styled.div`
  max-width: 115rem;
  display: grid;
  gap: 5rem;
  > div:first-child {
    width: 100%;
  }
  > div:last-child {
    width: 100%;
  }
  justify-content: space-between;
  h2 {
    ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_SPACED_100}
  }
  h3 {
    ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_150}
  }
  @media ${({ theme }) => theme.DEVICES.laptop} {
    display: flex;
    align-items: flex-start;

    h2 {
      ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400}
    }
    h3 {
      ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_200}
    }
  }
`
export const Itens = styled.div`
  display: grid;
  gap: 3.2rem;
  > button {
    width: 50%;
    justify-self: flex-end;
  }
`
export const PaymentMethods = styled.div`
  display: grid;
  gap: 3.2rem;
`

export const ListItemsStyled = styled(ListItems)`
  gap: 3.2rem;
`
