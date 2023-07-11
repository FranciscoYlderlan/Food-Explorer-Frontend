import { Container, Logo, Main } from './styles'
import logotipo from '../../assets/logo.svg'
import { Form } from '../../components/Form'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextLink } from '../../components/TextLink'

import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
export function SignIn() {
  const { signIn } = useAuth()
  const [login, setLogin] = useState({
    email: '',
    password: '',
  })
  function handleChange(e) {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  function handleSignIn(e) {
    e.preventDefault()
    const { password, email } = login
    signIn({ password, email })
  }
  return (
    <Container>
      <Logo>
        <img src={logotipo} alt="Logotipo" />
      </Logo>
      <Main>
        <h1>Faça o login</h1>
        <Form onSubmit={handleSignIn}>
          <Input
            labelPlaceholder="Email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="Email"
            name="email"
            errorMessage="Informe um email válido"
            onChange={handleChange}
            required
          />
          <Input
            labelPlaceholder="Senha"
            type="Password"
            name="password"
            placeholder="No mínimo 6 caracteres"
            errorMessage="Informe a senha"
            onChange={handleChange}
            required
          />
          <Button type="submit" title="Entrar" />
        </Form>
        <TextLink title="Criar uma conta" />
      </Main>
    </Container>
  )
}
