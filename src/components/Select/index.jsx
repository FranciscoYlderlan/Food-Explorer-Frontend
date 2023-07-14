import {
  Container,
  SelectBox,
  SelectSelected,
  SelectOptions,
} from './styles.js'
import { useState, useEffect } from 'react'
import { SelectOption } from '../SelectOption'
import { Dot } from '../Dot/index.jsx'

export function Select({
  options,
  selected = null,
  labelName = null,
  onChange = () => {},
  ...rest
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Selecione uma opção')
  const [selectedIcon, setSelectedIcon] = useState(null)
  const handleSelectClick = () => {
    setIsOpen(!isOpen)
  }

  function handleOptionClick(value, text) {
    setSelectedOption(text)
    setIsOpen(false)
    setSelectedIcon(text)
    onChange(value)
  }
  useEffect(() => {
    function isSelected(selected) {
      if (selected) {
        handleOptionClick(selected, selected)
      }
    }
    isSelected(selected)
  }, [])
  return (
    <Container>
      {labelName && <label>{labelName}</label>}
      <SelectBox open={isOpen}>
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
          {options &&
            options.map((option, i) => {
              return (
                <SelectOption
                  key={i}
                  value={option.id}
                  text={option.name}
                  onClick={() => handleOptionClick(option.id, option.name)}
                />
              )
            })}
        </SelectOptions>
      </SelectBox>
    </Container>
  )
}
