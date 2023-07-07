import styled from 'styled-components'
import { Input } from '../Input'
export const Container = styled.form`
  display: grid;
  gap: 2.4rem;
  width: 100%;
  > h1 {
    ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_SPACED_100}
  }
  @media ${({ theme }) => theme.DEVICES.laptop} {
    gap: 3.2rem;
    > h1 {
      ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400}
    }
  }
`
export const InputFile = styled(Input)`
  > div {
    position: relative;

    input {
      opacity: 0;
      &:hover {
        cursor: pointer;
      }
    }
    > span {
      margin-left: 3.2rem;
      display: flex;
      gap: 0.8rem;
      align-items: center;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      pointer-events: NONE;
      cursor: pointer;
      z-index: 0;
      ${({ theme }) => theme.FONTS.ROBOTO.SMALL_REGULAR};
    }
  }
  @media ${({ theme }) => theme.DEVICES.laptop} {
    width: 60%;
  }
`
export const Select = styled.select``

export const Col3 = styled.div`
  display: grid;
  gap: 2.4rem;

  @media ${({ theme }) => theme.DEVICES.laptop} {
    display: flex;
    gap: 3.2rem;
  }
`
export const Col2 = styled.div`
  display: grid;
  gap: 2.4rem;

  @media ${({ theme }) => theme.DEVICES.laptop} {
    display: flex;
    gap: 3.2rem;
    > div:last-child {
      width: 30%;
    }
  }
`
export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2.4rem;

  > button:first-child {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    &:hover {
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
    }
  }
  > button:last-child {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    &:hover {
      background-color: ${({ theme }) => theme.COLORS.TOMATO_300};
    }
  }

  @media ${({ theme }) => theme.DEVICES.laptop} {
    gap: 3.2rem;
  }
`
export const WrapperAddIngredients = styled.div`
  display: grid;
  gap: 1.6rem;
  width: 100%;
  > label {
    ${({ theme }) => theme.FONTS.ROBOTO.SMALL_REGULAR};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`
export const IngredientsArea = styled.div`
  display: flex;
  gap: 1.6rem;
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border: none;
  border-radius: 0.8rem;
  height: fit-content;
  width: 100%;
  flex-wrap: wrap;
`
