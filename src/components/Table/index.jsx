import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import { Container } from './styles'

export function Table() {
  const columns = [
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (params) => (
        <Select
          value={params.value}
          onChange={(event) => console.log(event.target.value)}
        >
          <MenuItem value="Em andamento">Em andamento</MenuItem>
          <MenuItem value="Concluído">Concluído</MenuItem>
          <MenuItem value="Pendente">Pendente</MenuItem>
        </Select>
      ),
    },
    {
      field: 'codigo',
      headerName: 'Código',
      width: 150,
      renderCell: (params) => (
        <TextField
          value={params.value}
          onChange={(event) => console.log(event.target.value)}
        />
      ),
    },
    {
      field: 'detalhamento',
      headerName: 'Detalhamento',
      width: 250,
      renderCell: (params) => (
        <TextField
          value={params.value}
          onChange={(event) => console.log(event.target.value)}
        />
      ),
    },
    {
      field: 'dataHora',
      headerName: 'Data e Hora',
      width: 200,
      renderCell: (params) => (
        <TextField
          value={params.value}
          onChange={(event) => console.log(event.target.value)}
        />
      ),
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
  ]

  return (
    <Container>
      <DataGrid
        columns={columns}
        rows={rows}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: `${({ theme }) => theme.COLORS.LIGHT_300}`,
        }}
      />
    </Container>
  )
}
