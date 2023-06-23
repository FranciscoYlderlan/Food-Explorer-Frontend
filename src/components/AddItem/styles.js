import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  width: 100%;
  text-align: center;
  gap: 1.6rem;
`
export const Price = styled.div`
  width: 100%;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.CAKE_200};
  &:hover {
    cursor: default;
  }
`

export const Counter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
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
`
export const Add = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.6rem;
`
