import { Button } from '../Button'
import { Container, Price, Counter, Add } from './styles'
import { Receipt, Minus, Plus } from '@phosphor-icons/react'

export function AddItem({ price, isPreview = false, isAdmin = false }) {
  return (
    <Container>
      {!isPreview && <Price>{`R$ ${79.5}`}</Price>}
      {!isAdmin && (
        <Add>
          <Counter>
            <Minus size={24} />
            <span>01</span>
            <Plus size={24} />
          </Counter>
          {!isPreview ? (
            <Button title="Incluir" />
          ) : (
            <Button title={`Incluir - R$ 25,00`} icon={Receipt} />
          )}
        </Add>
      )}
    </Container>
  )
}
