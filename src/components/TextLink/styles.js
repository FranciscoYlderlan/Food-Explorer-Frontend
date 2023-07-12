import styled from 'styled-components'

export const Container = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;

  width: fit-content;

  background-color: transparent;
  border: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  transition: color 0.3s;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`
// TODO: Mudar o tamanho da fonte do texto voltar
