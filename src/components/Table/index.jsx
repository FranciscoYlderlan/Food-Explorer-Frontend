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

import { api } from '../../services/api'

import { toast } from 'react-toastify'
import { toastConfig } from '../../services/toast'

import { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/auth'
export function Table({ isDesktop = false, ...rest }) {
  const { isAnAdmin } = useAuth()
  const [orders, setOrders] = useState([])
  const [status, setStatus] = useState([])
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
  async function fetchOrders(e) {
    let resource = ''
    try {
      resource = !isAnAdmin() ? '/orders/history' : '/orders'
      const response = await toast.promise(api.get(resource), {
        pending: 'Por favor aguarde...',
        ...toastConfig,
      })
      setOrders(response.data)
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.description)
      }
    }
  }

  useEffect(() => {
    async function handleLoadingSelectOptions() {
      try {
        const response = await toast.promise(api.get('/status'), {
          ...toastConfig,
        })
        setStatus(response.data)
      } catch (error) {
        if (error.response) toast.error(error.response.data.description)
        else toast.error('Erro ao tentar carregar status.')
      }
    }
    fetchOrders().then(() => handleLoadingSelectOptions())
  }, [])
  return (
    <>
      {orders.length > 0 && !isDesktop ? (
        <CardContainer {...rest}>
          {status.length > 0 &&
            orders.map((order, index) => {
              return (
                <Card
                  row={order}
                  key={index}
                  options={status}
                  isAdmin={isAnAdmin()}
                />
              )
            })}
        </CardContainer>
      ) : (
        <TableContainer>
          <TableHeader>
            <TableCell>Status</TableCell>
            <TableCell>Código</TableCell>
            <TableCell>Detalhamento</TableCell>
            <TableCell>Data e Hora</TableCell>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    {isAnAdmin() ? (
                      <Select
                        options={status}
                        selected={[order.id, order.status]}
                        isAdmin
                      />
                    ) : (
                      <Status value={order.status_id} text={order.status_id} />
                    )}
                  </TableCell>
                  <TableCell>{order.code}</TableCell>
                  <TableCell>{order.details}</TableCell>
                  <TableCell>{order.create_at}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </TableContainer>
      )}
    </>
  )
}
