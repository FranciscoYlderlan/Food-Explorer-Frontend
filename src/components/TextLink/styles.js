import styled from 'styled-components'

export const Container = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;

  width: fit-content;

  background-color: transparent;
  border: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  &:hover {
    cursor: pointer;
  }
`
