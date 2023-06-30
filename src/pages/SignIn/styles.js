import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.DEVICES.laptop} {
    display: flex;
  }
`

export const Logo = styled.header`
  > img {
    width: 28rem;
  }
  @media ${({ theme }) => theme.DEVICES.laptop} {
    > img {
      width: 32.5rem;
    }
  }
`

export const Main = styled.main``
