import { Warning } from '../Warning/index.jsx'
import { Container, BoxInput } from './styles.js'
import { AiFillWarning } from 'react-icons/ai'

export function Input({
  className,
  icon: Icon,
  labelPlaceholder,
  errorMessage,
  children,
  ...rest
}) {
  return (
    <Container className={className}>
      {labelPlaceholder && <label>{labelPlaceholder}</label>}

      <BoxInput>
        {Icon && <Icon size={20} />}
        <input {...rest} autoComplete="off" />
        {children}
      </BoxInput>

      <Warning icon={AiFillWarning} description={errorMessage} />
    </Container>
  )
}
