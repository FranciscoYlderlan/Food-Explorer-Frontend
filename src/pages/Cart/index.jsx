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

export function Cart() {
  const { totalPurchasePrice, handleRemoveItem } = useAuth()
  const [orders, setOrders] = useState([])
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

  function handleUpdatePuchaseItem(id) {
    handleRemoveItem(id).then(() =>
      setOrders(JSON.parse(localStorage.getItem('@food-explorer:order'))),
    )
  }

  useEffect(() => {
    localStorage.setItem('@food-explorer:isActive', false)
    setOrders(JSON.parse(localStorage.getItem('@food-explorer:order')))
  }, [orders])
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
              <PaymentMethods>
                <h2>Pagamento</h2>
                <Payment />
              </PaymentMethods>
            </CartStyled>
          </>
        )}
      </Main>
      <Footer />
    </Container>
  )
}
