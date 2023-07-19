import styled from 'styled-components'
import { SelectOption } from '../SelectOption'

export const CardContainer = styled.div`
  display: grid;
  gap: 1.7rem;
`

export const TableContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  max-height: 45rem;
`

export const TableHeader = styled.div`
  display: flex;
  border-bottom: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  padding-right: 0.6rem;

  ${({ theme }) => theme.FONTS.ROBOTO.SMALLER_BOLD};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > div:first-child {
    width: 35%;
  }
  > div:nth-child(2) {
    width: 25%;
  }
  > div:nth-child(3) {
    width: 100%;
  }
  > div:last-child {
    width: 25%;
    border: none;
  }
  position: sticky;
  top: 0;
`
//  .wrapper-table::-webkit-scrollbar-track {
//   margin-block-start: 3rem;
// }
export const TableCell = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  padding: 2.1rem 2.4rem;

  border-right: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
`

export const TableBody = styled.div`
  ${({ theme }) => theme.FONTS.ROBOTO.SMALLER_REGULAR};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  display: grid;
  > div:last-child {
    border: none;
  }
  overflow-y: auto;
`

export const TableRow = styled.div`
  display: flex;
  border-bottom: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  > div:first-child {
    width: 35%;
    //TODO: se for admin diminuir o padding para 1 padding: 1rem 2.4rem;
  }
  > div:nth-child(2) {
    width: 25%;
  }
  > div:nth-child(3) {
    width: 100%;
  }
  > div:last-child {
    width: 25%;
  }
`
export const Status = styled(SelectOption)`
  ${({ theme }) => theme.FONTS.ROBOTO.REGULAR};
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  height: fit-content;
  padding: 0;
`
