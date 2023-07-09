import { Container, Header, Status, Description } from './styles.js'

import { Select } from '../Select'
export function Card({ row, isAdmin, options, ...rest }) {
  return (
    <Container>
      <Header>
        <span>{row.codigo}</span>
        {!isAdmin && <Status value={row.status} text={row.status} />}
        <span>{row.dataHora}</span>
      </Header>
      <Description>{row.detalhamento}</Description>
      {isAdmin && <Select options={options} selected={row.status} />}
    </Container>
  )
}
