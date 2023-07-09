import { Container } from './styles.js'
import { Dot } from '../Dot/index.jsx'

export function SelectOption({ value, text, onClick, ...rest }) {
  return (
    <Container data-value={value} onClick={onClick} {...rest}>
      {value === 'Pendente' && <Dot color="#AB222E" />}
      {value === 'Preparando' && <Dot color="#FBA94C" />}
      {value === 'Entregue' && <Dot color="#04D361" />}
      {text}
    </Container>
  )
}
