import { Container } from './styles'

export function Section({ title, children, hasData = false }) {
  return (
    <Container>
      <span>
        <h2>{title}</h2>
        {!hasData && <p>Item não encontrado</p>}
      </span>
      {children}
    </Container>
  )
}
