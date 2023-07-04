import { Container, Frame } from './styles'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { ListItems } from '../../components/ListItems'
import { Carousel } from '../../components/Carousel'
import Macarons from '../../assets/Macarons.png'
export function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <Frame>
          <img src={Macarons} alt="Doces macarons" />
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </Frame>
        <ListItems>
          <Section title="Refeições">
            <Carousel />
          </Section>
          <Section title="Bebidas">
            <Carousel />
          </Section>
          <Section title="Sobremesas">
            <Carousel />
          </Section>
        </ListItems>
      </Main>
      <Footer />
    </Container>
  )
}
