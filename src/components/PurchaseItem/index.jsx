import { Container, Col1, Row1, ButtonRemove } from './styles.js'

import {
  URLImageFormatter,
  currencyInputFormatter,
} from '../../utils/formatting.js'

import dishPlaceholder from '../../assets/placeholder-dish.svg'

export function PurchaseItem({
  item = null,
  removeItem,
  isFavoritePage = false,
  ...rest
}) {
  return (
    <Container {...rest}>
      <img
        src={URLImageFormatter(item.picture, dishPlaceholder)}
        alt={item.name}
      />
      <Col1>
        <Row1>
          {isFavoritePage ? (
            <h4>{item.name}</h4>
          ) : (
            <>
              <h4>{`${item.qty} X ${item.name}`}</h4>
              <span>{currencyInputFormatter(item.amount)}</span>
            </>
          )}
        </Row1>
        <ButtonRemove onClick={() => removeItem(item.id)}>Remover</ButtonRemove>
      </Col1>
    </Container>
  )
}
