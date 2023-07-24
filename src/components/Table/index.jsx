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
  const { isAnAdmin, searchKeyword } = useAuth()
  const [orders, setOrders] = useState([])
  const [status, setStatus] = useState([])

  async function fetchOrders(e) {
    let resource = ''
    try {
      resource = !isAnAdmin()
        ? `/orders/history/?keyword=${searchKeyword}`
        : `/orders/?keyword=${searchKeyword}`

      const response = await toast.promise(api.get(resource), {
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
    if (statusId) return status.find((state) => state.id === statusId).name
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
    fetchOrders()
  }, [searchKeyword])

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
    async function loadingData() {
      await toast.promise(fetchOrders(), {
        pending: 'Por favor aguarde...',
        ...toastConfig,
      })
      fetchStatusOptions()
    }
    loadingData()
  }, [])

  return (
    <>
      {!isDesktop ? (
        <CardContainer {...rest}>
          {orders.length > 0 && status.length > 0 ? (
            orders.map((order, index) => {
              return (
                <Card
                  order={order}
                  key={order.code}
                  options={status}
                  isAdmin={isAnAdmin()}
                  handleResource={handleUpdateStatus}
                />
              )
            })
          ) : (
            <p>Nenhum pedido registrado</p>
          )}
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
            {orders.length === 0 && <p>Nenhum pedido registrado</p>}
            {orders.length > 0 &&
              status.length > 0 &&
              orders.map((order, index) => {
                // console.log(order.code, order.status_id)
                return (
                  <TableRow key={order.code}>
                    <TableCell>
                      {isAnAdmin() ? (
                        <Select
                          key={order.code}
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
