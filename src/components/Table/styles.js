import styled from 'styled-components'
import { SelectOption } from '../SelectOption'

export const CardContainer = styled.div`
  display: grid;
  gap: 1.7rem;

  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100}
  }
`

export const TableContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 0.8rem 0.8rem 0 0;
`

export const TableHeader = styled.div`
  display: flex;
  border-bottom: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 0.8rem 0.8rem 0 0;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  ${({ theme }) => theme.FONTS.ROBOTO.SMALLER_BOLD};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > div:first-child {
    width: 45%;
    //TODO: se for admin diminuir o padding para 1 padding: 1rem 2.4rem;
  }
  > div:nth-child(2) {
    width: 30%;
  }
  > div:nth-child(3) {
    width: 80%;
  }
  > div:last-child {
    width: 30%;
    border: none;
  }
  position: sticky;
  top: 9.9rem;
  z-index: 3;
`

export const TableCell = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 2.1rem 2.4rem;

  border-right: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
`

export const TableBody = styled.div`
  ${({ theme }) => theme.FONTS.ROBOTO.SMALLER_REGULAR};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  p {
    text-align: center;
    margin: 2rem 0;
  }

  display: grid;
  > div:last-child {
    border: none;
  }
`

export const TableRow = styled.div`
  display: flex;
  height: fit-content;
  border-bottom: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};

  > div:first-child {
    width: 45%;
    //TODO: se for admin diminuir o padding para 1 padding: 1rem 2.4rem;
  }
  > div:nth-child(2) {
    width: 30%;
  }
  > div:nth-child(3) {
    width: 80%;
  }
  > div:last-child {
    width: 30%;
    border: none;
  }
`
export const Status = styled(SelectOption)`
  ${({ theme }) => theme.FONTS.ROBOTO.REGULAR};
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  height: fit-content;
  padding: 0;
`
