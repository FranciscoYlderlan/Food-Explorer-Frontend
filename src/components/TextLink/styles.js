import styled from 'styled-components'

export const Container = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;

  width: fit-content;

  background-color: transparent;
  border: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  &:hover {
    cursor: pointer;
  }
`
