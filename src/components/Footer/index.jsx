import { Container, Logo, Copyright } from './styles'
import Polygon from '../../assets/Polygon.svg'

export function Footer() {
  return (
    <Container>
      <Logo>
        <img src={Polygon} alt="Logomarca" />
        <h3>Food Explorer</h3>
      </Logo>
      <Copyright>© 2023 - Todos os direitos reservados.</Copyright>
    </Container>
  )
}
