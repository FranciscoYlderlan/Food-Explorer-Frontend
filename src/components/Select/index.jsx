import {
  CustomSelect,
  SelectSelected,
  SelectOptions,
  SelectOption,
  IconRed,
  IconGreen,
  IconBlue,
} from './styles.js'
import { useState } from 'react'

export function CustonSelectComponent() {
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
    <CustomSelect>
      <SelectSelected onClick={handleSelectClick}>
        {selectedOption}
        {selectedIcon && (
          <>
            {selectedIcon === 'opcao1' && <IconRed />}
            {selectedIcon === 'opcao2' && <IconBlue />}
            {selectedIcon === 'opcao3' && <IconGreen />}
          </>
        )}
      </SelectSelected>
      <SelectOptions open={isOpen}>
        <SelectOption
          data-value="opcao1"
          onClick={() => handleOptionClick('opcao1', 'Opção 1')}
        >
          Opção 1
          <IconRed />
        </SelectOption>
        <SelectOption
          data-value="opcao2"
          onClick={() => handleOptionClick('opcao2', 'Opção 2')}
        >
          Opção 2
          <IconBlue />
        </SelectOption>
        <SelectOption
          data-value="opcao3"
          onClick={() => handleOptionClick('opcao3', 'Opção 3')}
        >
          Opção 3
          <IconGreen />
        </SelectOption>
      </SelectOptions>
    </CustomSelect>
  )
}
