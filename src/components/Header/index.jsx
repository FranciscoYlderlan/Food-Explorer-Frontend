import { Container } from './styles'
import { Button } from '../Button'
import { Receipt, SignOut } from '@phosphor-icons/react'
import Polygon from '../../assets/Polygon1.svg'
export function Header() {
  return (
    <Container>
      <img src={Polygon} alt="Logomarca" />
      <h3>food explorer</h3>
      <Button icon={Receipt} title="Pedidos (0)"></Button>
      <SignOut size={32} />
    </Container>
  )
}
