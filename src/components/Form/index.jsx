import { Container } from './styles'

export function Form({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>
}
