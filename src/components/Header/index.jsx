import { Container } from './styles'
import { Button } from '../Button'
import { Input } from '../Input'
import { Receipt, SignOut, MagnifyingGlass } from '@phosphor-icons/react'
import Polygon from '../../assets/Polygon1.svg'
export function Header() {
  return (
    <Container>
      <img src={Polygon} alt="Logomarca" />
      <h3>food explorer</h3>
      <Input
        icon={MagnifyingGlass}
        placeholder="Busque por pratos ou ingredientes"
      />
      <Button icon={Receipt} title="Pedidos (0)"></Button>
      <SignOut size={32} />
    </Container>
  )
}
