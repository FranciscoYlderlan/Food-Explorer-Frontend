import { Button } from '../Button'
import { Container, Price, Counter, Add } from './styles'
import { Receipt, Minus, Plus } from '@phosphor-icons/react'
import {
  currencyInputFormatter,
  TwoDigitsFormatter,
} from '../../utils/formatting'
import { useState, useEffect } from 'react'

import { useAuth } from '../../hooks/auth'

export function AddItem({ item, isPreview = false, isAdmin = false, ...rest }) {
  const { handleAddItem } = useAuth()
  const { price, id, picture, name } = item
  const [amount, setAmount] = useState(price)
  const [qty, setQty] = useState(1)

  function handleIncrementQty() {
    setQty((prevState) => prevState + 1)
  }
  function handleDecrementQty() {
    if (qty > 1) setQty((prevState) => prevState - 1)
  }
  function handleAmountCalculation() {
    return price * qty
  }
  function handleClickIncludeItem() {
    handleAddItem({ id, picture, name, qty, amount })
  }

  useEffect(() => {
    setAmount(handleAmountCalculation)
  }, [qty])

  return (
    <Container>
      {!isPreview && <Price>{`${currencyInputFormatter(amount)}`}</Price>}
      {!isAdmin && (
        <Add {...rest}>
          <Counter>
            <Minus size={24} onClick={handleDecrementQty} />
            <span>{TwoDigitsFormatter(qty)}</span>
            <Plus size={24} onClick={handleIncrementQty} />
          </Counter>
          {!isPreview ? (
            <Button title="Incluir" onClick={handleClickIncludeItem} />
          ) : (
            <Button
              title={`Incluir - ${currencyInputFormatter(amount)}`}
              icon={Receipt}
              onClick={handleClickIncludeItem}
            />
          )}
        </Add>
      )}
    </Container>
  )
}
