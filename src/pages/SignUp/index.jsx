import { Container, Logo, Main } from './styles'
import logotipo from '../../assets/logo.svg'
import { Form } from '../../components/Form'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextLink } from '../../components/TextLink'

export function SignUp() {
  return (
    <Container>
      <Logo>
        <img src={logotipo} alt="Logotipo" />
      </Logo>
      <Main>
        <h1>Crie sua conta</h1>
        <Form>
          <Input
            labelPlaceholder="Seu nome"
            placeholder="Exemplo: Joãozin do pão de queijo"
            type="text"
            errorMessage="Este campo é obrigatório"
          />
          <Input
            labelPlaceholder="Email"
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            errorMessage="Este campo é obrigatório/Informe um email válido"
          />
          <Input
            labelPlaceholder="Senha"
            type="password"
            placeholder="No mínimo 6 caracteres"
            errorMessage="Este campo é obrigatório"
          />
          <Input
            labelPlaceholder="Confirme a senha"
            type="password"
            placeholder="No mínimo 6 caracteres"
            errorMessage="Este campo é obrigatório"
          />
          <Button title="Entrar" />
        </Form>
        <TextLink title="Já tenho uma conta" />
      </Main>
    </Container>
  )
}
