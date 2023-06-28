import styled from 'styled-components'

export const Container = styled.button`
  /* width: 100%; */

  display: flex;

  align-items: center;
  justify-content: center;

  gap: 0.8rem;

  padding: 1.2rem 2.4rem;

  border: none;
  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  font-style: normal;
  font-weight: 500;

  line-height: 2.4rem;

  transition: all 0.3s;

  &:disabled {
    cursor: not-allowed;
    filter: brightness(0.5);
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }
`
