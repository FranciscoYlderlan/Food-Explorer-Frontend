import { Container, Pix, Credit, Content, Col2 } from './styles'
import { Form } from '../Form'
import { Input } from '../Input'
import { Button } from '../Button'
import { MdOutlinePix } from 'react-icons/md'
import { CreditCard } from '@phosphor-icons/react'

import { useState, useEffect } from 'react'

import qrCodeExample from '../../assets/qr-code-example.svg'
import stroke from '../../assets/Stroke.svg'
import checkCircle from '../../assets/CheckCircle.svg'

const status = {
  OPENED: 0,
  SEND: 1,
  APPROVED: 3,
}

export function Payment({ data = null, handleSubmit = () => {}, ...rest }) {
  const [isCreditOpen, setIsCreditOpen] = useState(false)
  const [isPixOpen, setIsPixOpen] = useState(true)
  const [statusCheckout, setStatusCheckout] = useState(0)
  const [image, setImage] = useState(qrCodeExample)
  const [cardNumber, setCardNumber] = useState('')
  const [expirationDate, setExpirationDate] = useState('')

  function handleChangeCardNumber(event) {
    // Remover todos os espaços em branco do valor atual do input
    const inputValue = event.target.value.replace(/\s/g, '')

    // Adicionar espaçamento a cada grupo de 4 dígitos
    const spacedValue = inputValue.replace(/(\d{4})/g, '$1 ').trim()

    // Atualizar o valor do input com o espaçamento adicionado
    setCardNumber(spacedValue)
  }

  function handleChangeExpirationDate(event) {
    // Remover todos os caracteres não numéricos do valor atual do input
    const inputValue = event.target.value.replace(/\D/g, '')

    // Adicionar barras (/) entre o mês e o ano
    let formattedValue = inputValue
    if (inputValue.length > 2) {
      formattedValue = inputValue.replace(/^(\d{2})(\d{0,2})/, '$1/$2')
    }

    // Atualizar o valor do input com as barras adicionadas
    setExpirationDate(formattedValue)
  }

  function handleCreditClick() {
    setIsCreditOpen(true)
    setIsPixOpen(false)
    // setStatusCheckout((prevState) => prevState + 1)
  }

  function handlePixClick() {
    setIsPixOpen(true)
    setIsCreditOpen(false)
  }

  useEffect(() => {
    if (statusCheckout === status.SEND) {
      setImage(stroke)
    } else if (statusCheckout === status.APPROVED) {
      setImage(checkCircle)
    }
  }, [statusCheckout])
  return (
    <Container>
      <Pix isOpen={isPixOpen} onClick={handlePixClick}>
        <MdOutlinePix size={32} />
        <h4>PIX</h4>
      </Pix>
      <Credit isOpen={isCreditOpen} onClick={handleCreditClick}>
        <CreditCard size={32} />
        <h4>Crédito</h4>
      </Credit>
      <Content>
        {isPixOpen ? (
          <img src={image} alt="QR code" />
        ) : (
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="0000 0000 0000 0000"
              pattern="[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}"
              maxLength="19"
              value={cardNumber}
              errorMessage="Número do cartão inválido"
              onChange={handleChangeCardNumber}
              required
            />
            <Col2>
              <Input
                placeholder="03/23"
                pattern="^(0[1-9]|1[0-2])\/\d{2}$"
                maxLength="5"
                value={expirationDate}
                errorMessage="Data inválida"
                onChange={handleChangeExpirationDate}
                required
              />
              <Input
                placeholder="000"
                pattern="[0-9]{3,4}"
                maxLength="3"
                errorMessage="CVV inválida"
                required
              />
            </Col2>
            <Button type="submit" title="Finalizar pagamento" />
          </Form>
        )}
      </Content>
    </Container>
  )
}
