import { Button } from '../Button'
import { Container, Price, Counter, Add } from './styles'
import { Minus, Plus } from '@phosphor-icons/react'
export function AddItem({ price }) {
  return (
    <Container>
      <Price>{`R$ ${79.5}`}</Price>
      <Add>
        <Counter>
          <Minus size={24} />
          <span>01</span>
          <Plus size={24} />
        </Counter>
        <Button title="Incluir" />
      </Add>
    </Container>
  )
}
