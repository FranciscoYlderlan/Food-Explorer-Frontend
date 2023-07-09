import styled from 'styled-components'
import Select from '@mui/material/Select'
import { DataGrid } from '@mui/x-data-grid'
import { styled as styled_ } from '@mui/material/styles'

export const StyledSelect = styled(Select)`
  color: ${({ theme }) => theme.COLORS.LIGHT_400} !important;
  font-size: 1.4rem !important;
  padding: 0;
  min-width: 20rem;
  .MuiList-root .MuiList-padding .MuiMenu-list .MuiList-root-MuiMenu-list {
    background-color: ${({ theme }) => theme.COLORS.DARK_900} !important;
  }
  .MuiSelect-icon {
    color: ${({ theme }) => theme.COLORS.LIGHT_400} !important;
  }
  background-color: ${({ theme }) => theme.COLORS.DARK_900} !important;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_400} !important;
  }
`

export const StyledDataGrid = styled_(DataGrid)(({ theme }) => ({
  color: '#E1E1E6',
  fontSize: 14,

  '& .MuiDataGrid-cell': {
    color: '#C4C4CC',
  },
  '& .MuiDataGrid-footer': {
    backgroundColor: '#192227',
  },
  '& .MuiPaginationItem-root, .MuiPaginationItem-page': {
    color: '#E1E1E6',
  },
  '& .MuiDataGrid-colCellTitle .MuiDataGrid-iconSeparator': {
    color: '#E1E1E6',
    fontWeight: 'bold',
  },
  '& .MuiDataGrid-columnHeaderTitle': {
    fontWeight: 'bold',
  },
}))

export const Container = styled.div`
  margin: 15rem auto 0;
  max-width: 100rem;
  height: 37rem;
  .caTcPF .MuiDataGrid-root {
    border-color: green;
  }
`
export const LinkStyled = {
  margin: '15rem auto 0',
  maxWidth: '112.5rem',
  height: '37rem',
  '.MuiDataGrid-root': { border: '2px solid #192227' },
  '.MuiDataGrid-withBorderColor': { border: '2px solid #192227' },
  '.MuiDataGrid-actionsCell': { color: 'red' },
}
