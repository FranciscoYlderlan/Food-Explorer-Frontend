import { useState } from 'react'

import Pagination from '@mui/material/Pagination'

import PaginationItem from '@mui/material/PaginationItem'

import MenuItem from '@mui/material/MenuItem'

import { Container, StyledSelect, StyledDataGrid, LinkStyled } from './styles'
import { Dot } from '../Dot'
export function DataTable() {
  const columns = [
    {
      field: 'status',
      headerName: 'Status',
      sortable: false,
      width: 250,
      padding: 24,
      renderCell: (params) => (
        <StyledSelect
          value={params.value}
          onChange={(event) => handleSelectChange(event, params)}
        >
          <MenuItem value="Pendente">
            <Dot color="#AB222E" /> Pendente
          </MenuItem>
          <MenuItem value="Em andamento">
            <Dot color="#FBA94C" /> Em andamento
          </MenuItem>
          <MenuItem value="Concluído">
            <Dot color="#04D361" /> Concluído
          </MenuItem>
        </StyledSelect>
        // <Select />
      ),
    },
    {
      field: 'codigo',
      headerName: 'Código',
      sortable: false,
      width: 150,
      padding: 24,
      // renderCell: (params) => (
      //   <TextField
      //     value={params.value}
      //     onChange={(event) => console.log(event.target.value)}
      //   />
      // ),
    },
    {
      field: 'detalhamento',
      headerName: 'Detalhamento',
      sortable: false,
      width: 500,
      padding: 24,
      // renderCell: (params) => (
      //   <TextField
      //     value={params.value}
      //     onChange={(event) => console.log(event.target.value)}
      //   />
      // ),
    },
    {
      field: 'dataHora',
      headerName: 'Data e Hora',
      sortable: false,
      width: 150,
      padding: 24,
      // renderCell: (params) => (
      //   <TextField
      //     value={params.value}
      //     onChange={(event) => console.log(event.target.value)}
      //   />
      // ),
    },
  ]

  const rows = [
    {
      id: 1,
      status: 'Em andamento',
      codigo: 'ABC123',
      detalhamento: 'Detalhes...',
      dataHora: '2023-06-20 14:30',
    },
    {
      id: 2,
      status: 'Concluído',
      codigo: 'DEF456',
      detalhamento: 'Outros detalhes...',
      dataHora: '2023-06-21 09:45',
    },
    {
      id: 3,
      status: 'Pendente',
      codigo: 'GHI789',
      detalhamento: 'Mais detalhes...',
      dataHora: '2023-06-22 17:15',
    },
    {
      id: 4,
      status: 'Em andamento',
      codigo: 'JKL012',
      detalhamento: 'Detalhes...',
      dataHora: '2023-06-20 14:30',
    },
    {
      id: 5,
      status: 'Concluído',
      codigo: 'MNO345',
      detalhamento: 'Outros detalhes...',
      dataHora: '2023-06-21 09:45',
    },
    {
      id: 6,
      status: 'Pendente',
      codigo: 'PQR678',
      detalhamento: 'Mais detalhes...',
      dataHora: '2023-06-22 17:15',
    },
    {
      id: 7,
      status: 'Em andamento',
      codigo: 'STU901',
      detalhamento: 'Detalhes...',
      dataHora: '2023-06-20 14:30',
    },
    {
      id: 8,
      status: 'Concluído',
      codigo: 'VWX234',
      detalhamento: 'Outros detalhes...',
      dataHora: '2023-06-21 09:45',
    },
    {
      id: 9,
      status: 'Pendente',
      codigo: 'YZA567',
      detalhamento: 'Mais detalhes...',
      dataHora: '2023-06-22 17:15',
    },
    {
      id: 10,
      status: 'Em andamento',
      codigo: 'BCD890',
      detalhamento: 'Detalhes...',
      dataHora: '2023-06-20 14:30',
    },
    {
      id: 11,
      status: 'Concluído',
      codigo: 'EFG123',
      detalhamento: 'Outros detalhes...',
      dataHora: '2023-06-21 09:45',
    },
    {
      id: 12,
      status: 'Pendente',
      codigo: 'HIJ456',
      detalhamento: 'Mais detalhes...',
      dataHora: '2023-06-22 17:15',
    },
    {
      id: 13,
      status: 'Em andamento',
      codigo: 'KLM789',
      detalhamento: 'Detalhes...',
      dataHora: '2023-06-20 14:30',
    },
  ]
  const pageSize = 5
  const [rowData, setRowData] = useState(rows)
  const [page, setPage] = useState(0)
  const [paginatedRows, setPaginatedRows] = useState(rows.slice(0, pageSize))

  function handlePageChange(event, value) {
    setPaginatedRows(rowData.slice((value - 1) * pageSize, value * pageSize))
    setPage(value - 1)
  }

  function handleSelectChange(event, params) {
    const updatedRowData = rowData.map((row) => {
      if (row.codigo === params.row.codigo) {
        return { ...row, status: event.target.value }
      }
      return row
    })
    setRowData(updatedRowData)
    setPaginatedRows(
      updatedRowData.slice(page * pageSize, (page + 1) * pageSize),
    )
  }

  return (
    <Container>
      <StyledDataGrid
        sx={LinkStyled}
        pagination
        disableColumnMenu
        disableColumnSelector
        showCellVerticalBorder
        showColumnVerticalBorder
        page={page}
        onPageChange={handlePageChange}
        pageSize={pageSize}
        rows={paginatedRows}
        columns={columns}
        components={{
          Pagination: () => (
            <Pagination
              color="primary"
              variant="outlined"
              page={page + 1}
              count={Math.ceil(rowData.length / pageSize)}
              renderItem={(props2) => (
                <PaginationItem {...props2} disableRipple />
              )}
              onChange={handlePageChange}
            />
          ),
        }}
      />
    </Container>
  )
}
