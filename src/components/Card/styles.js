import styled from 'styled-components'
import { CaretDown } from '@phosphor-icons/react'

export const Container = styled.div`
  display: grid;
  justify-content: center;
  width: fit-content;
  padding: 2.4rem;
  margin: 0 3.5rem;
  gap: 1.6rem;
  border-radius: 0.8rem;
  border: 0.2rem solid ${({ theme }) => theme.COLORS.DARK_1000};
`

export const Header = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 3rem;
  > span:last-child {
    white-space: nowrap;
  }
  > svg path {
    width: 1.6rem;
  }
`
export const Description = styled.div`
  display: flex;
  width: 100%;
`
export const Status = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`
export const SelectStatus = styled.select`
  width: 100%;
  padding: 1.6rem;

  appearance: none;
  border: none;
  border-radius: 0.8rem;
  outline: none;
  /* color: ${({ theme }) => theme.COLORS.LIGHT_400}; */

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  > option {
    display: flex;
    gap: 0.8rem;
    > span {
      color: ${({ theme }) => theme.COLORS.CARROT_100};
    }
    &:first-child {
      > span {
        color: ${({ theme }) => theme.COLORS.TOMATO_300};
      }
    }
    &:last-child {
      > span {
        color: ${({ theme }) => theme.COLORS.MINT};
      }
    }
  }
  padding-right: 20px;
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 10L12 14L16 10' stroke='%239C98A6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: right 24px top 50%;

  transition: transform 0.3s ease;

  &.inverted {
    transform: scaleY(-1);
  }
`
