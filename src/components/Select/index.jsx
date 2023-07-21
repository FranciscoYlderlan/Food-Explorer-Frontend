import {
  Container,
  SelectBox,
  SelectSelected,
  SelectOptions,
} from './styles.js'
import { useState, useEffect } from 'react'
import { SelectOption } from '../SelectOption'
import { Dot } from '../Dot/index.jsx'

import { toast } from 'react-toastify'
import { toastConfig } from '../../services/toast'

export function Select({
  options,
  selected = null,
  labelName = null,
  onChange = () => {},
  currentItem = null,
  handleResource = () => {},
  ...rest
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Selecione uma opção')
  const [selectedIcon, setSelectedIcon] = useState(null)
  const handleSelectClick = () => {
    setIsOpen(!isOpen)
  }

  async function handleOptionClick(value, text) {
    setSelectedOption(text)
    setIsOpen(false)
    setSelectedIcon(text)
    onChange(value)
    if (isOpen && currentItem) {
      await toast.promise(handleResource(currentItem, value), {
        pending: 'Por favor aguarde...',
        ...toastConfig,
      })
    }
  }
  useEffect(() => {
    function isSelected(selected) {
      if (selected) {
        const value = selected[0]
        const text = selected[1]
        handleOptionClick(value, text)
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
