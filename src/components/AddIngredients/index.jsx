import { Container } from './styles'
import { FiPlus, FiX } from 'react-icons/fi'
import { useState, useEffect } from 'react'
export function AddIngredients({
  isNew = false,
  value = '',
  onClick,
  ...rest
}) {
  const [inputValue, setInputValue] = useState('')

  function getInputWidth() {
    return inputValue.length > 0 ? `${(inputValue.length + 1) * 8}px` : '8rem'
  }
  useEffect(() => {
    setInputValue(value)
  }, [value])
  return (
    <Container {...rest} isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        style={{ width: getInputWidth() }}
        {...rest}
      />
      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus size={22} /> : <FiX size={22} />}
      </button>
    </Container>
  )
}
