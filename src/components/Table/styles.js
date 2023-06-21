import styled from 'styled-components'
import Select from '@mui/material/Select'
import { DataGrid } from '@mui/x-data-grid'
import { styled as styled_ } from '@mui/material/styles'

export const StyledSelect = styled(Select)`
  color: ${({ theme }) => theme.COLORS.LIGHT_400} !important;
  font-size: 1.4rem !important;
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_400} !important;
  }
`

export const StyledDataGrid = styled_(DataGrid)(({ theme }) => ({
  color: '#E1E1E6',
  fontSize: 14,
  '& .MuiDataGrid-root': {
    borderColor: 'red',
  },
  '& .MuiDataGrid-columnHeaders MuiDataGrid-withBorderColor': {
    border: `3px solid ${'#192227'}`,
  },
  '& .MuiDataGrid-columnsContainer': {
    backgroundColor: '#192227',
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },

  '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
    border: `3px solid ${'#192227'}`,
  },
  '& .MuiDataGrid-cell': {
    color: '#C4C4CC',
  },
  '& .MuiDataGrid-footerContainer': {
    border: `3px solid ${'#192227'}`,
  },
}))

export const Container = styled.div`
  --unstable_DataGrid-overlayBackground: transparent !important;
  margin: 15rem auto 0;
  border-radius: 0.8rem 0.8rem 0 0;
  /* border: ${({ theme }) => theme.COLORS.DARK_1000} solid 3px; */
  max-width: 112.5rem;
  height: 37rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  &.MuiDataGrid-root {
    border-color: ${({ theme }) => theme.COLORS.DARK_1000} solid 3px !important;
  }
`
