import styled, { keyframes } from 'styled-components'

const shakeHorizontal = keyframes`
    0%,
    100% {
        transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70% {
        transform: translateX(-10px);
    }
    20%,
    40%,
    60% {

        transform: translateX(10px);
    }
    80% {

        transform: translateX(8px);
    }
    90% {
        transform: translateX(-8px);
    }
`

export const Container = styled.div`
  position: relative;
  width: 100%;
`

export const BoxInput = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  padding-left: 2rem;
  gap: 1.6rem;
  border-radius: 1rem;

  outline: 0.2rem solid ${({ theme }) => theme.COLORS.DARK_700};
  outline-offset: -0.2rem;

  color: ${({ theme }) => theme.COLORS.LIGTH_500};

  > label {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    pointer-events: none;
    left: 15%;
  }

  > input {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    border: none;
    padding: 1.5rem 0;
    padding-right: 2rem;
    width: 100%;
    transition: all 1s;

    border-radius: 1rem;

    &::placeholder {
      color: transparent;
    }

    &:invalid {
    }

    font-style: normal;
    font-weight: 400;
    line-height: 2.1rem;

    outline: none;

    &:focus ~ label,
    &:valid ~ label {
      transform: translateY(-100%) scale(0.95);
      background-color: none;
      padding: 0 0.2em;
      color: ${({ theme }) => theme.COLORS.MINT_100};
    }

    &:invalid:focus ~ label,
    &:invalid:not(:placeholder-shown) ~ label {
      transform: translateY(-100%) scale(0.95);
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
    /* animation: ${shakeHorizontal} 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955) both; */

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
