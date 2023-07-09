import { Container, TextLinkStyled } from './styles'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'
import { Table } from '../../components/Table'

import { PiCaretLeftBold } from 'react-icons/pi'

import { useState, useEffect } from 'react'

export function Orders() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
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
        {!isOpenMenu && (
          <>
            <TextLinkStyled title="voltar" icon={PiCaretLeftBold} />
            <h2>Histórico de Pedidos</h2>
            <Table />
          </>
        )}
      </Main>
      <Footer />
    </Container>
  )
}
