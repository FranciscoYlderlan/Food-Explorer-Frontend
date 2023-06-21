import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import MenuItem from '@mui/material/MenuItem'

import { Container, StyledSelect } from './styles'

export function Table() {
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

  const [rowData, setRowData] = useState(rows)

  function handleSelectChange(event, params) {
    const updatedRowData = rowData.map((row) => {
      if (row.codigo === params.row.codigo) {
        return { ...row, status: event.target.value }
      }
      return row
    })
    setRowData(updatedRowData)
  }

  const columns = [
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (params) => (
        <StyledSelect
          value={params.value}
          onChange={(event) => handleSelectChange(event, params)}
        >
          <MenuItem value="Em andamento">Em andamento</MenuItem>
          <MenuItem value="Concluído">Concluído</MenuItem>
          <MenuItem value="Pendente">Pendente</MenuItem>
        </StyledSelect>
      ),
    },
    {
      field: 'codigo',
      headerName: 'Código',
      width: 150,
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
      width: 250,
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
      width: 200,
      // renderCell: (params) => (
      //   <TextField
      //     value={params.value}
      //     onChange={(event) => console.log(event.target.value)}
      //   />
      // ),
    },
  ]

  return (
    <Container>
      <DataGrid columns={columns} rows={rowData} />
    </Container>
  )
}
