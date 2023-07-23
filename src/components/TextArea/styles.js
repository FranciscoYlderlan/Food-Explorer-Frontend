import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  gap: 1.6rem;

  width: 100%;
  position: relative;
  > label {
    ${({ theme }) => theme.FONTS.ROBOTO.SMALL_REGULAR};

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    pointer-events: none;
  }
`

export const BoxTextArea = styled.textarea`
  ${({ theme }) => theme.FONTS.ROBOTO.SMALL_REGULAR};
  height: 17rem;
  width: 100%;
  padding: 2rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  border: none;
  border-radius: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  resize: none;

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

  &:focus-within {
    outline: 0.3rem solid ${({ theme }) => theme.COLORS.MINT_100};
    outline-offset: -0.3rem;
  }

  &:invalid:focus,
  &:has(input:invalid:not(:placeholder-shown)) {
    outline: 0.3rem solid ${({ theme }) => theme.COLORS.CARROT};
    outline-offset: -0.3rem;
  }
  &:invalid:focus ~ div {
    display: flex;
    width: 100%;

    align-items: center;
    padding-left: 2rem;
    gap: 0.3rem;
    border-radius: 1rem;

    color: ${({ theme }) => theme.COLORS.CARROT};
  }
`
