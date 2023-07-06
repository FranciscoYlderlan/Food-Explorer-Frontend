import styled from 'styled-components'

export const Container = styled.form`
  display: grid;
  gap: 3.2rem;
  width: 100%;
  > h1 {
    ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_SPACED_100}
  }
  @media ${({ theme }) => theme.DEVICES.laptop} {
    > h1 {
      ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400}
    }
  }
`
export const InputFile = styled.div``

export const Select = styled.select``

export const Col3 = styled.div`
  display: grid;
  @media ${({ theme }) => theme.DEVICES.laptop} {
    display: flex;
  }
`
export const Col2 = styled.div`
  display: grid;
  @media ${({ theme }) => theme.DEVICES.laptop} {
    display: flex;
  }
`
export const Buttons = styled.div`
  display: flex;
  @media ${({ theme }) => theme.DEVICES.laptop} {
  }
`
