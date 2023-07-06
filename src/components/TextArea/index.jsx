import { Warning } from '../Warning/index.jsx'
import { AiFillWarning } from 'react-icons/ai'
import { Container, BoxTextArea } from './styles'

export function TextArea({ errorMessage = '', labelPlaceholder, ...rest }) {
  return (
    <Container>
      <label>{labelPlaceholder}</label>
      <BoxTextArea {...rest} />
      <Warning icon={AiFillWarning} description={errorMessage} />
    </Container>
  )
}
