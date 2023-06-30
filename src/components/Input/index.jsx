import { Warning } from '../Warning/index.jsx'
import { Container, BoxInput } from './styles.js'
import { AiFillWarning } from 'react-icons/ai'

export function Input({ icon: Icon, labelPlaceholder, errorMessage, ...rest }) {
  return (
    <Container>
      <label>{labelPlaceholder}</label>

      <BoxInput>
        {Icon && <Icon size={20} />}
        <input {...rest} autoComplete="off" />
      </BoxInput>

      <Warning icon={AiFillWarning} description={errorMessage} />
    </Container>
  )
}
