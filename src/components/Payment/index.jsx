import { Container, Pix, Credit, Content, Col2 } from './styles'
import { Form } from '../Form'
import { Input } from '../Input'
import { Button } from '../Button'
import { MdOutlinePix } from 'react-icons/md'
import { CreditCard } from '@phosphor-icons/react'

import { useState } from 'react'

import qrCodeExample from '../../assets/qr-code-example.svg'

export function Payment() {
  const [isCreditOpen, setIsCreditOpen] = useState(false)
  const [isPixOpen, setIsPixOpen] = useState(true)

  function handleCreditClick() {
    setIsCreditOpen(true)
    setIsPixOpen(false)
  }

  function handlePixClick() {
    setIsPixOpen(true)
    setIsCreditOpen(false)
  }

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
          <img src={qrCodeExample} alt="QR code" />
        ) : (
          <Form>
            <Input placeholder="0000 0000 0000 0000" />
            <Col2>
              <Input placeholder="03/23" />
              <Input placeholder="000" />
            </Col2>
            <Button title="Finalizar pagamento" />
          </Form>
        )}
      </Content>
    </Container>
  )
}
