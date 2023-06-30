import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  gap: 0.8rem;

  width: 100%;
  position: relative;

  > label {
    ${({ theme }) => theme.FONTS.ROBOTO.SMALL_REGULAR};

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    pointer-events: none;
  }
`

export const BoxInput = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  padding-left: 2rem;
  gap: 1.6rem;
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  /* outline: 0.2rem solid ${({ theme }) => theme.COLORS.DARK_700}; */
  /* outline-offset: -0.2rem; */

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > input {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border: none;
    padding: 1.5rem 0;
    padding-right: 2rem;
    width: 100%;
    transition: all 1s;

    border-radius: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    &:invalid {
    }

    font-style: normal;
    font-weight: 400;
    line-height: 2.1rem;

    outline: none;

    &:focus ~ label,
    &:valid ~ label {
      /* transform: translateY(-100%) scale(0.95); */
      background-color: none;
      padding: 0 0.2em;
      color: ${({ theme }) => theme.COLORS.MINT_100};
    }

    &:invalid:focus ~ label,
    &:invalid:not(:placeholder-shown) ~ label {
      /* transform: translateY(-100%) scale(0.95); */
      background-color: none;
      padding: 0 0.2em;
      color: ${({ theme }) => theme.COLORS.CARROT};
    }
    &:valid:not(:focus) ~ label {
      color: ${({ theme }) => theme.COLORS.DARK_700};
    }
  }

  &:focus-within > svg {
    color: ${({ theme }) => theme.COLORS.MINT_100};
  }

  &:has(input:invalid:focus) > svg,
  &:has(input:invalid:not(:placeholder-shown)) > svg {
    color: ${({ theme }) => theme.COLORS.CARROT};
  }

  &:focus-within {
    outline: 0.2rem solid ${({ theme }) => theme.COLORS.MINT_100};
  }

  &:has(input:invalid:focus),
  &:has(input:invalid:not(:placeholder-shown)) {
    outline: 0.2rem solid ${({ theme }) => theme.COLORS.CARROT};
    outline-offset: -0.2rem;
  }
  &:has(input:invalid:focus) + div {
    display: flex;
    width: 100%;

    align-items: center;
    padding-left: 2rem;
    gap: 1.6rem;
    border-radius: 1rem;

    color: ${({ theme }) => theme.COLORS.CARROT};
  }
`
