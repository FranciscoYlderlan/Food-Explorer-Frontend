import { Container, TextLinkStyled } from './styles'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'
import { FormDish } from '../../components/FormDish'

import { PiCaretLeftBold } from 'react-icons/pi'

import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

export function Create() {
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
      <Header handleMenuClick={handleMenuClick} />
      <Main>
        {(!isOpenMenu || windowWidth > 1024) && (
          <>
            <TextLinkStyled
              title="voltar"
              icon={PiCaretLeftBold}
              onClick={handleComeBack}
            />
            <FormDish />
          </>
        )}
      </Main>
      <Footer />
    </Container>
  )
}
