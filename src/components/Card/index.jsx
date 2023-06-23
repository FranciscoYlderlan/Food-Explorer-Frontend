import {
  Container,
  Header,
  Status,
  SelectStatus,
  Description,
} from './styles.js'
import { Dot } from '../Dot/index.jsx'
import { CaretDown } from '@phosphor-icons/react'

export function Card() {
  return (
    <Container>
      <Header>
        <span>000004</span>
        <Status>
          <Dot />
          <span>Pendente</span>
        </Status>
        <span>20/05 às 18h00</span>
      </Header>
      <Description>
        1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de
        Maracujá
      </Description>
      <SelectStatus>
        <option value="Pendente">
          <span>&#x25CF;</span> Pendente
        </option>
        <option value="Preparando">
          <span>&#x25CF;</span> Preparando
        </option>
        <option value="Concluído">
          <span>&#x25CF;</span> Concluído
        </option>
      </SelectStatus>
    </Container>
  )
}
