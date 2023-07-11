import { Container, Logo, Main } from './styles'
import logotipo from '../../assets/logo.svg'
import { Form } from '../../components/Form'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextLink } from '../../components/TextLink'

import { useState } from 'react'

import { api } from '../../services/api'

import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toastConfig } from '../../services/toast'

export function SignUp() {
  const [record, setRecord] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const navigate = useNavigate()

  const [validatePassword, setValidatePassword] = useState({
    password: null,
    confirmPassword: null,
  })
  function handleChange(e) {
    setRecord({ ...record, [e.target.name]: e.target.value })
  }

  function handleConfirmPassword(e) {
    const input = e.target
    const { value } = input
    const greaterThenFive = value.length > 5

    setRecord({ ...record, [e.target.name]: e.target.value })
    setValidatePassword({
      ...validatePassword,
      [e.target.name]: e.target,
    })
    if (greaterThenFive) {
      input.setCustomValidity('')
    } else {
      input.setCustomValidity('No mínimo 6 caracteres')
    }
  }
  async function handleSubmit(e) {
    e.preventDefault()

    const { name, email, password, confirmPassword } = record
    const inputFilled = password && confirmPassword
    const equalPasswords = password === confirmPassword

    if (inputFilled) {
      if (equalPasswords) {
        validatePassword.password.setCustomValidity('')
        validatePassword.confirmPassword.setCustomValidity('')
      } else {
        validatePassword.password.setCustomValidity('Senhas não coincidem')
        validatePassword.confirmPassword.setCustomValidity(
          'Senhas não coincidem',
        )
        return null
      }
    }

    try {
      await toast.promise(api.post('/user', { name, email, password }), {
        pending: 'Por favor aguarde...',
        success: 'Usuário cadastrado!',
        error: 'Não foi possível cadastrar usuário.',
        ...toastConfig,
      })
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.description)
      }
    } finally {
      e.target.reset()
    }
  }

  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Logo>
        <img src={logotipo} alt="Logotipo" />
      </Logo>
      <Main>
        <h1>Crie sua conta</h1>
        <Form onSubmit={handleSubmit}>
          <Input
            labelPlaceholder="Seu nome"
            placeholder="Exemplo: Joãozin do pão de queijo"
            type="text"
            name="name"
            errorMessage="Campo é obrigatório"
            onChange={handleChange}
            required
          />
          <Input
            labelPlaceholder="Email"
            type="email"
            name="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            errorMessage="Campo obrigatório/Email inválido"
            onChange={handleChange}
            required
          />
          <Input
            labelPlaceholder="Senha"
            type="password"
            name="password"
            placeholder="No mínimo 6 caracteres"
            errorMessage="Senhas inválidas"
            onChange={handleConfirmPassword}
            required
          />
          <Input
            labelPlaceholder="Confirme a senha"
            type="password"
            name="confirmPassword"
            placeholder="No mínimo 6 caracteres"
            errorMessage="Senhas inválidas"
            onChange={handleConfirmPassword}
            required
          />
          <Button type="submit" title="Criar conta" />
        </Form>
        <TextLink title="Já tenho uma conta" onClick={() => navigate('/')} />
      </Main>
    </Container>
  )
}
