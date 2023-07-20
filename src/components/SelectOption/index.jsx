import { Container } from './styles.js'
import { Dot } from '../Dot/index.jsx'

export function SelectOption({ value, text, onClick, ...rest }) {
  return (
    <Container data-value={value} onClick={onClick} {...rest}>
      {text === 'Pendente' && <Dot color="#AB222E" />}
      {text === 'Preparando' && <Dot color="#FBA94C" />}
      {text === 'Entregue' && <Dot color="#04D361" />}
      <span>{text}</span>
    </Container>
  )
}
