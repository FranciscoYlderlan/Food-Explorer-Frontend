import { Container } from './styles.js'

export function ListItems({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>
}
