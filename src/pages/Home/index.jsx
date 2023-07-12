import { Container, Frame } from './styles'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { ListItems } from '../../components/ListItems'
import { Carousel } from '../../components/Carousel'
import Macarons from '../../assets/Macarons.png'
import { useState, useEffect } from 'react'

export function Home() {
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
            <Frame>
              <img src={Macarons} alt="Doces macarons" />
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </Frame>
            <ListItems>
              <Section title="Refeições">
                <Carousel />
                {
                  // TODO: generalizar a altura dos cards dentro do
                }
              </Section>
              <Section title="Bebidas">
                <Carousel />
              </Section>
              <Section title="Sobremesas">
                <Carousel />
              </Section>
            </ListItems>
          </>
        )}
      </Main>
      <Footer />
    </Container>
  )
}
