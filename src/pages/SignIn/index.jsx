import { Container, Logo, Main } from './styles'
import logotipo from '../../assets/logo.svg'
import { Form } from '../../components/Form'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextLink } from '../../components/TextLink'

export function SignIn() {
  return (
    <Container>
      <Logo>
        <img src={logotipo} alt="Logotipo" />
      </Logo>
      <Main>
        <h1>Faça o login</h1>
        <Form>
          <Input
            labelPlaceholder="Email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="Email"
            errorMessage="Informe um email válido"
          />
          <Input
            labelPlaceholder="Senha"
            type="Password"
            placeholder="No mínimo 6 caracteres"
            errorMessage="Informe a senha"
          />
          <Button title="Entrar" />
        </Form>
        <TextLink title="Criar uma conta" />
      </Main>
    </Container>
  )
}
