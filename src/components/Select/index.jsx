import { Container, SelectSelected, SelectOptions } from './styles.js'
import { useState } from 'react'
import { SelectOption } from '../SelectOption'
import { Dot } from '../Dot/index.jsx'

export function Select() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Selecione uma opção')
  const [selectedIcon, setSelectedIcon] = useState(null)

  const handleSelectClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (value, text) => {
    setSelectedOption(text)
    setIsOpen(false)
    setSelectedIcon(value)
  }

  return (
    <Container open={isOpen}>
      <SelectSelected onClick={handleSelectClick}>
        {selectedIcon && (
          <>
            {selectedIcon === 'Pendente' && <Dot color="#AB222E" />}
            {selectedIcon === 'Preparando' && <Dot color="#FBA94C" />}
            {selectedIcon === 'Entregue' && <Dot color="#04D361" />}
          </>
        )}
        <>{selectedOption}</>
      </SelectSelected>
      <SelectOptions open={isOpen}>
        <SelectOption
          value="Pendente"
          text="Pendente"
          onClick={() => handleOptionClick('Pendente', 'Pendente')}
        />
        <SelectOption
          value="Preparando"
          text="Preparando"
          onClick={() => handleOptionClick('Preparando', 'Preparando')}
        />
        <SelectOption
          value="Entregue"
          text="Entregue"
          onClick={() => handleOptionClick('Entregue', 'Entregue')}
        />
      </SelectOptions>
    </Container>
  )
}
