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

export function Cart() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  function checkedOnchangeWindowSize() {
    const width = window.innerWidth
    setWindowWidth(width)
  }
  window.addEventListener('resize', checkedOnchangeWindowSize)
  function handleMenuClick() {
    setIsOpenMenu(JSON.parse(localStorage.getItem('@food-explorer:isActive')))
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
            <TextLinkStyled title="voltar" icon={PiCaretLeftBold} />
            <CartStyled>
              <Itens>
                <h2>Carrinho</h2>

                <ListItemsStyled>
                  <PurchaseItem />
                  <PurchaseItem />
                  <PurchaseItem />
                </ListItemsStyled>
                <h3>Total: R$ 600,00</h3>
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
