import { Warning } from '../Warning/index.jsx'
import { Container, BoxInput } from './styles.js'
import { AiFillWarning } from 'react-icons/ai'

export function Input({ icon: Icon, labelPlaceholder, errorMessage, ...rest }) {
  return (
    <Container>
      <BoxInput>
        {Icon && <Icon size={20} />}
        <input {...rest} autoComplete="off" />
        <label>{labelPlaceholder}</label>
      </BoxInput>
      <Warning icon={AiFillWarning} description={errorMessage} />
    </Container>
  )
}
