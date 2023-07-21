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

import { dateFormatter, detailsFormatter } from '../../utils/formatting'

export function Table({ isDesktop = false, ...rest }) {
  const { isAnAdmin } = useAuth()
  const [orders, setOrders] = useState([])
  const [status, setStatus] = useState([])
  const [keyword, setKeyword] = useState('')

  async function fetchOrders(e) {
    let resource = ''
    try {
      resource = !isAnAdmin()
        ? `/orders/history/?keyword=${keyword}`
        : `/orders/?keyword=${keyword}`

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
  function handleGetStatusName(statusId) {
    const status_ = status.find((state) => state.id === statusId)

    return status_.name
  }
  async function handleUpdateStatus(order, newState) {
    const data = {
      user_id: order.user_id,
      new_status: newState,
      created_at: order.created_at,
    }
    try {
      await toast.promise(api.patch(`/orders`, data), {
        ...toastConfig,
      })
    } catch (error) {
      if (error.response) toast.error(error.response.data.description)
      else toast.error('Erro ao tentar atualizar status.')
    }
  }

  useEffect(() => {
    async function fetchStatusOptions() {
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
    fetchOrders().then(() => fetchStatusOptions())
  }, [])
  return (
    <>
      {orders.length > 0 && !isDesktop ? (
        <CardContainer {...rest}>
          {status.length > 0 &&
            orders.map((order, index) => {
              return (
                <Card
                  order={order}
                  key={index}
                  options={status}
                  isAdmin={isAnAdmin()}
                  handleResource={handleUpdateStatus}
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
            {status.length > 0 &&
              orders.map((order, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>
                      {isAnAdmin() ? (
                        <Select
                          options={status}
                          selected={[
                            order.status_id,
                            handleGetStatusName(order.status_id),
                          ]}
                          isAdmin
                          handleResource={handleUpdateStatus}
                          currentItem={order}
                        />
                      ) : (
                        <Status
                          value={order.status_id}
                          text={handleGetStatusName(order.status_id)}
                        />
                      )}
                    </TableCell>
                    <TableCell>{order.code}</TableCell>
                    <TableCell>{detailsFormatter(order.details)}</TableCell>
                    <TableCell>{dateFormatter(order.created_at)}</TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </TableContainer>
      )}
    </>
  )
}
