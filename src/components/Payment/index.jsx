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

export function Payment({ ...rest }) {
  const [isCreditOpen, setIsCreditOpen] = useState(false)
  const [isPixOpen, setIsPixOpen] = useState(true)
  const [statusCheckout, setStatusCheckout] = useState(0)
  const [image, setImage] = useState(qrCodeExample)
  function handleCreditClick() {
    setIsCreditOpen(true)
    setIsPixOpen(false)
    setStatusCheckout((prevState) => prevState + 1)
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
