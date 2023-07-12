import { Container, TextLinkStyled, ListItemsStyled } from './styles'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'
import { PurchaseItem } from '../../components/PurchaseItem'

import { PiCaretLeftBold } from 'react-icons/pi'

import { useState, useEffect } from 'react'

export function Favorites() {
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
            <h2>Meus Favoritos</h2>
            <ListItemsStyled>
              <PurchaseItem />
              <PurchaseItem />
              <PurchaseItem />
              <PurchaseItem />
              <PurchaseItem />
              <PurchaseItem />
              <PurchaseItem />
            </ListItemsStyled>
          </>
        )}
      </Main>
      <Footer />
    </Container>
  )
}
