import { Container, TextLinkStyled } from './styles'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'
import { Table } from '../../components/Table'

import { PiCaretLeftBold } from 'react-icons/pi'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

export function Orders() {
  const { handleSearchKeywordChange } = useAuth()
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
  useEffect(() => {
    localStorage.setItem('@food-explorer:isActive', false)
  }, [])
  return (
    <Container>
      <Header
        handleChangeInput={handleSearchKeywordChange}
        handleMenuClick={handleMenuClick}
        placeholderSearch="Busque pelo status"
      />
      <Main>
        {(!isOpenMenu || windowWidth > 1024) && (
          <>
            <TextLinkStyled
              title="voltar"
              icon={PiCaretLeftBold}
              onClick={handleComeBack}
            />
            <h2>Histórico de pedidos</h2>
            <Table isDesktop={windowWidth >= 1024} />
          </>
        )}
      </Main>
      <Footer />
    </Container>
  )
}
