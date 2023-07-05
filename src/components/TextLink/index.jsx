import { Container } from './styles.js'

export function TextLink({ title, icon: Icon, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon size={32} />}
      {title}
    </Container>
  )
}
