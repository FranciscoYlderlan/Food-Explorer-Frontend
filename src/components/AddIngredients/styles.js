import styled from 'styled-components'

export const Container = styled.div`
  height: fit-content;
  width: fit-content;

  display: flex;
  gap: 0.8rem;
  align-items: center;

  padding: 0.8rem 1.4rem;

  border-radius: 0.8rem;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.LIGHT_500}` : '2px solid transparent'};

  > button {
    display: flex;
    border: none;
    background: none;
    > svg {
      color: ${({ theme, isNew }) =>
        isNew ? theme.COLORS.LIGHT_600 : theme.COLORS.LIGHT_100};
    }
  }
  > button:hover {
    cursor: pointer;
  }
  > input {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    background-color: transparent;
    border: none;
    transition: width 0.2s;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    outline: none;
  }
`
