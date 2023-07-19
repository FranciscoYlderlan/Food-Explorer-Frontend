import styled from 'styled-components'
import { TextLink } from '../../components/TextLink'
import { AddItem } from '../../components/AddItem'

export const Container = styled.div``

export const ListItems = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
  @media ${({ theme }) => theme.DEVICES.laptop} {
    justify-content: start;
    justify-self: start;
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

export const Content = styled.div`
  display: grid;
  justify-items: center;
  gap: 1.6rem;
  > img {
    width: 26rem;
    height: 26rem;
    object-fit: cover;
    border-radius: 50%;
  }
  @media ${({ theme }) => theme.DEVICES.laptop} {
    display: flex;
    align-items: center;
    gap: 4.7rem;
    > img {
      width: 39rem;
      height: 39rem;
    }
  }
`
export const Info = styled.div`
  display: grid;
  gap: 4.8rem;
  justify-items: center;
  @media ${({ theme }) => theme.DEVICES.laptop} {
    justify-items: start;
  }
`

export const Text = styled.div`
  display: grid;
  gap: 2.4rem;
  justify-items: center;
  > h1 {
    ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_350}
  }
  > p {
    text-align: center;
    ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_SPACED}
  }
  @media ${({ theme }) => theme.DEVICES.laptop} {
    justify-items: start;
    > h1 {
      ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_500}
    }
  }
`

export const Action = styled.div`
  align-self: center;
  @media ${({ theme }) => theme.DEVICES.laptop} {
    align-self: start;
  }
`
export const AddItemStyled = styled(AddItem)`
  display: flex;
  > button {
    padding: 1.2rem 2.4rem;
  }
`
