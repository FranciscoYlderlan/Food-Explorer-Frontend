import {
  Container,
  Header,
  Status,
  SelectStatus,
  Description,
} from './styles.js'
import { Dot } from '../Dot'
import { CustonSelectComponent } from '../Select'

export function Card() {
  return (
    <Container>
      <Header>
        <span>000004</span>
        <Status>
          <Dot color="#AB222E" />
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
          <Dot color="#AB222E" /> Pendente
        </option>
        <option value="Preparando">
          <Dot color="#AB222E" /> Preparando
        </option>
        <option value="Concluído">
          <Dot color="#AB222E" /> Concluído
        </option>
      </SelectStatus>
      <CustonSelectComponent />
    </Container>
  )
}
