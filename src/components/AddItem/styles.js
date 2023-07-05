import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  width: 100%;
  text-align: center;
  gap: 1.6rem;
`
export const Price = styled.div`
  ${({ theme }) => theme.FONTS.ROBOTO.SMALL_REGULAR}

  width: 100%;
  color: ${({ theme }) => theme.COLORS.CAKE_200};
  &:hover {
    cursor: default;
  }
  @media ${({ theme }) => theme.DEVICES.tablet} {
    ${({ theme }) => theme.FONTS.ROBOTO.BIGGEST_BOLD}
  }
`

export const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.FONTS.ROBOTO.SMALL_REGULAR}

  width: 100%;

  gap: 1.4rem;
  span {
    width: 2.4rem;
  }
  span:hover {
    cursor: default;
  }
  svg:hover {
    cursor: pointer;
  }
  @media ${({ theme }) => theme.DEVICES.tablet} {
    ${({ theme }) => theme.FONTS.ROBOTO.BIG_BOLD}
  }
`
export const Add = styled.div`
  width: 100%;
  max-width: 31.5rem;
  display: grid;
  align-items: center;
  gap: 1.6rem;
  > button {
    white-space: nowrap;
    width: 100%;
    padding: 0.4rem 2.4rem;
  }
  @media ${({ theme }) => theme.DEVICES.tablet} {
    display: flex;
    > button {
      padding: 1.2rem 2.4rem;
    }
  }
`
