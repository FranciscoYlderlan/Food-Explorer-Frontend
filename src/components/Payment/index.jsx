import { Container, Pix, Credit, Content, Col2 } from './styles'
import { Form } from '../Form'
import { Input } from '../Input'
import { Button } from '../Button'
import { MdOutlinePix } from 'react-icons/md'
import { CreditCard } from '@phosphor-icons/react'
export function Payment() {
  return (
    <Container>
      <Pix>
        <MdOutlinePix size={32} />
        <h4>PIX</h4>
      </Pix>
      <Credit>
        <CreditCard size={32} />
        <h4>Crédito</h4>
      </Credit>
      <Content>
        <Form>
          <Input placeholder="0000 0000 0000 0000" />
          <Col2>
            <Input placeholder="03/23" />
            <Input placeholder="000" />
          </Col2>
          <Button title="Finalizar pagamento" />
        </Form>
      </Content>
    </Container>
  )
}
