import {
  Container,
  TextLinkStyled,
  ListItems,
  Text,
  Info,
  Action,
  Content,
} from './styles'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'
import { AddItem } from '../../components/AddItem'
import { Tag } from '../../components/Tag'

import { PiCaretLeftBold } from 'react-icons/pi'
import { useState, useEffect } from 'react'
export function Preview() {
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
            <Content>
              <img
                src="https://st.depositphotos.com/1003814/4626/i/600/depositphotos_46267763-stock-photo-fried-chicken-fillets.jpg"
                alt="prato"
              />
              <Info>
                <Text>
                  <h1>Frango Grelhado</h1>
                  <p>
                    Frango gratinado ao oleo e sal com uma salada de repolho
                    Frango gratinado ao oleo e sal com uma salada de repolho
                    Frango gratinado ao oleo e sal com uma salada de repolho
                    Frango gratinado ao oleo e sal com uma salada de repolho
                    Frango gratinado ao oleo e sal com uma salada de repolho
                    Frango gratinado ao oleo e sal com uma salada de repolho
                    Frango gratinado ao oleo e sal com uma salada de repolho
                    Frango gratinado ao oleo e sal com uma salada de repolho
                  </p>
                  <ListItems>
                    <Tag title="alface" />
                    <Tag title="cebola" />
                    <Tag title="pepino" />
                    <Tag title="rabanete" />
                    <Tag title="tomate" />
                  </ListItems>
                </Text>
                <Action>
                  <AddItem isPreview={true} />
                </Action>
              </Info>
            </Content>
          </>
        )}
      </Main>
      <Footer />
    </Container>
  )
}
