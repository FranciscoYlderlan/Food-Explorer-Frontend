import { Container } from './styles'
import { Select } from '../Select'
export function FormDish({ children }) {
  return (
    <Container>
      <h1>Novo prato</h1>

      <Select options={['Refeições', 'Sobremesas', 'Bebidas']} />
    </Container>
  )
}
