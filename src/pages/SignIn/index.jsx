import { Container, Logo, Main } from './styles'
import logotipo from '../../assets/logo.svg'
export function SignIn() {
  return (
    <Container>
      <Logo>
        <img src={logotipo} alt="Logotipo" />
      </Logo>
      <Main></Main>
    </Container>
  )
}
