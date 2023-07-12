import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  gap: 1.6rem;

  width: 100%;
  height: fit-content;
  position: relative;

  > label {
    ${({ theme }) => theme.FONTS.ROBOTO.SMALL_REGULAR};

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    pointer-events: none;
  }
`
export const SelectBox = styled.div`
  position: relative;

  border-radius: 0.8rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  ${({ theme }) => theme.FONTS.ROBOTO.SMALL_REGULAR};
  &:after {
    position: absolute;
    content: '';
    z-index: 2;
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 10L12 14L16 10' stroke='%239C98A6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");

    height: 2.4rem;
    width: 2.4rem;

    right: 5%;

    top: 50%;
    transform: translateY(-50%) ${({ open }) => (open ? ' scaleY(-1)' : '')};
  }
`

export const SelectSelected = styled.div`
  appearance: none;
  border: none;
  border-radius: 0.8rem;
  outline: none;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.6rem;
  cursor: pointer;
`

export const SelectOptions = styled.ul`
  border-radius: 0 0 10px 10px;
  border: solid ${({ theme }) => theme.COLORS.LIGHT_100} 1px;
  /* border-top: none; */
  position: absolute;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: ${({ open }) => (open ? 'block' : 'none')};
  z-index: 9999;
`

export const SelectOption = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  position: relative;
`

export const Icon = styled.span`
  display: inline-block;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 8px;
`
