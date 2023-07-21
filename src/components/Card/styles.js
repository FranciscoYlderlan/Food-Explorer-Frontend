import styled from 'styled-components'
import { SelectOption } from '../SelectOption'

export const Container = styled.div`
  ${({ theme }) => theme.FONTS.ROBOTO.SMALLER_REGULAR};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  display: grid;

  padding: 1.5rem;
  gap: 1.6rem;
  border-radius: 0.8rem;
  border: 0.2rem solid ${({ theme }) => theme.COLORS.DARK_1000};
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  > span:last-child {
    white-space: nowrap;
  }
`
export const Description = styled.div`
  display: flex;
  width: 100%;
`
export const Status = styled(SelectOption)`
  width: fit-content;
  ${({ theme }) => theme.FONTS.ROBOTO.SMALLER_REGULAR};
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  height: fit-content;
  line-height: 100%;
  padding: 0;
`
