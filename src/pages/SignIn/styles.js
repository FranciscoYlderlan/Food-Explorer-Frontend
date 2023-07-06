import styled from 'styled-components'

export const Logo = styled.header`
  width: fit-content;
  height: fit-content;

  > img {
    width: 28rem;
  }
  @media ${({ theme }) => theme.DEVICES.laptop} {
    text-align: center;
    > img {
      width: 32.5rem;
    }
  }
`

export const Main = styled.main`
  display: grid;
  gap: 3.2rem;
  min-width: 75vw;
  justify-items: center;

  > h1 {
    display: none;
    ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400}
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > a {
    ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100}
  }

  @media ${({ theme }) => theme.DEVICES.laptop} {
    margin-right: 10rem;
    padding: 6.4rem;
    border-radius: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    h1 {
      display: flex;
    }
  }
`

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  height: fit-content;

  display: grid;
  justify-items: center;
  justify-self: center;
  gap: 7rem;

  @media ${({ theme }) => theme.DEVICES.laptop} {
    display: flex;

    justify-content: center;
    align-items: center;
    > ${Logo} {
      width: 50%;
    }
    > ${Main} {
      min-width: 47.5rem;
    }
  }
`
