import { Container, TextLinkStyled } from './styles'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'
import { FormDish } from '../../components/FormDish'

import { PiCaretLeftBold } from 'react-icons/pi'

import { useState, useEffect } from 'react'

export function Update() {
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
            <FormDish />
          </>
        )}
      </Main>
      <Footer />
    </Container>
  )
}
