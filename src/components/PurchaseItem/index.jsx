import { Container, Col1, Row1 } from './styles.js'

export function PurchaseItem() {
  return (
    <Container>
      <img
        src="https://st.depositphotos.com/1003814/4626/i/600/depositphotos_46267763-stock-photo-fried-chicken-fillets.jpg"
        alt="prato"
      />
      <Col1>
        <Row1>
          <h4>Frango Grelhado</h4>
          <span>R$ 200,00</span>
        </Row1>
        <p>Remover</p>
      </Col1>
    </Container>
  )
}
