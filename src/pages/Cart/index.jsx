import {
  Container,
  TextLinkStyled,
  CartStyled,
  Itens,
  ListItemsStyled,
  PaymentMethods,
} from './styles'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'

import { Payment } from '../../components/Payment'

import { PurchaseItem } from '../../components/PurchaseItem'

import { PiCaretLeftBold } from 'react-icons/pi'

import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { currencyInputFormatter } from '../../utils/formatting.js'

import { api } from '../../services/api'

import { toast } from 'react-toastify'
import { toastConfig } from '../../services/toast'

export function Cart() {
  const { totalPurchasePrice, handleRemoveItem, acceptedOrder } = useAuth()
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem('@food-explorer:order')),
  )
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const navigate = useNavigate()
  function handleComeBack() {
    navigate(-1)
  }
  function checkedOnchangeWindowSize() {
    const width = window.innerWidth
    setWindowWidth(width)
  }

  window.addEventListener('resize', checkedOnchangeWindowSize)

  function handleMenuClick() {
    setIsOpenMenu(JSON.parse(localStorage.getItem('@food-explorer:isActive')))
  }
  async function handleSubmit(e) {
    e.preventDefault()
    const formatterData = orders.map(({ id, qty }) => {
      return { id, qty }
    })
    const orders_ = { dishes: formatterData }

    try {
      await toast.promise(api.post('/orders', orders_), {
        pending: 'Aguardando pagamento no caixa...',
        success: 'Pagamento aprovado!',
        error: 'Não foi possível aprovar pagamento.',
        ...toastConfig,
      })
      acceptedOrder()
      setOrders(JSON.parse(localStorage.getItem('@food-explorer:order')))
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.description)
      }
    }
  }
  function handleUpdatePuchaseItem(id) {
    handleRemoveItem(id)
    setOrders(JSON.parse(localStorage.getItem('@food-explorer:order')))
  }

  useEffect(() => {
    localStorage.setItem('@food-explorer:isActive', false)
  }, [])
  return (
    <Container>
      <Header handleMenuClick={handleMenuClick} />
      <Main>
        {(!isOpenMenu || windowWidth > 1024) && (
          <>
            <TextLinkStyled
              title="voltar"
              icon={PiCaretLeftBold}
              onClick={handleComeBack}
            />
            <CartStyled>
              <Itens>
                <h2>Pedidos</h2>

                {orders.length > 0 && (
                  <ListItemsStyled>
                    {orders.map((order, index) => (
                      <PurchaseItem
                        key={index}
                        item={order}
                        removeItem={handleUpdatePuchaseItem}
                      />
                    ))}
                  </ListItemsStyled>
                )}
                <h3>{`Total: ${currencyInputFormatter(
                  totalPurchasePrice,
                )}`}</h3>
              </Itens>
              {orders.length > 0 && (
                <PaymentMethods>
                  <h2>Pagamento</h2>
                  <Payment handleSubmit={handleSubmit} />
                </PaymentMethods>
              )}
            </CartStyled>
          </>
        )}
      </Main>
      <Footer />
    </Container>
  )
}
