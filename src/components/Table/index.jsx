import {
  CardContainer,
  TableContainer,
  TableBody,
  TableHeader,
  TableCell,
  TableRow,
  Status,
} from './styles'
import { Select } from '../Select'
import { Card } from '../Card'
export function Table() {
  const rows = [
    {
      id: 1,
      status: 'Preparando',
      codigo: 'ABC123',
      detalhamento: 'Detalhes...',
      dataHora: '2023-06-20 14:30',
    },
    {
      id: 2,
      status: 'Entregue',
      codigo: 'DEF456',
      detalhamento:
        'Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... Outros detalhes... ',
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
      status: 'Preparando',
      codigo: 'JKL012',
      detalhamento: 'Detalhes...',
      dataHora: '2023-06-20 14:30',
    },
    {
      id: 5,
      status: 'Entregue',
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
      status: 'Preparando',
      codigo: 'STU901',
      detalhamento: 'Detalhes...',
      dataHora: '2023-06-20 14:30',
    },
    {
      id: 8,
      status: 'Entregue',
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
      status: 'Preparando',
      codigo: 'BCD890',
      detalhamento: 'Detalhes...',
      dataHora: '2023-06-20 14:30',
    },
    {
      id: 11,
      status: 'Entregue',
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
      status: 'Preparando',
      codigo: 'KLM789',
      detalhamento: 'Detalhes...',
      dataHora: '2023-06-20 14:30',
    },
  ]
  return (
    // <CardContainer>
    //   {rows?.map((row, index) => {
    //     return (
    //       <Card
    //         row={row}
    //         key={index}
    //         options={['Pendente', 'Preparando', 'Entregue']}
    //         isAdmin
    //       />
    //     )
    //   })}
    // </CardContainer>
    <TableContainer>
      {false && rows}

      <TableHeader>
        <TableCell>Status</TableCell>
        <TableCell>Código</TableCell>
        <TableCell>Detalhamento</TableCell>
        <TableCell>Data e Hora</TableCell>
      </TableHeader>
      <TableBody>
        {rows?.map((row, index) => {
          return (
            <TableRow key={index}>
              <TableCell>
                <Select
                  options={['Pendente', 'Preparando', 'Entregue']}
                  selected={row.status}
                />

                {/* <Status value={row.status} text={row.status} /> */}
              </TableCell>
              <TableCell>{row.codigo}</TableCell>
              <TableCell>{row.detalhamento}</TableCell>
              <TableCell>{row.dataHora}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </TableContainer>
  )
}
