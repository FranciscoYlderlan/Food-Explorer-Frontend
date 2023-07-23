import { Container } from './styles.js'

export function Warning({ icon: Icon, description, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      <span>{description}</span>
    </Container>
  )
}
