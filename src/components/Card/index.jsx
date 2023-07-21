import { Container, Header, Status, Description } from './styles.js'

import { dateFormatter, detailsFormatter } from '../../utils/formatting'

import { Select } from '../Select'
export function Card({
  order,
  isAdmin = false,
  options,
  handleResource = () => {},
  ...rest
}) {
  function handleGetStatusName(statusId) {
    const status = options.find((state) => state.id === statusId)
    return status.name
  }
  return (
    <Container>
      <Header>
        <span>{order.code}</span>
        {!isAdmin && (
          <Status
            value={order.status_id}
            text={handleGetStatusName(order.status_id)}
          />
        )}
        <span>{dateFormatter(order.created_at)}</span>
      </Header>
      <Description>{detailsFormatter(order.details)}</Description>
      {isAdmin && (
        <Select
          options={options}
          selected={[order.status_id, handleGetStatusName(order.status_id)]}
          handleResource={handleResource}
          currentItem={order}
        />
      )}
    </Container>
  )
}
