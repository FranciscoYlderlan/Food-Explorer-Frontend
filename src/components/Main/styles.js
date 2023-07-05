import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  grid-area: content;
  align-self: start;
  min-height: 80vh;
  max-width: 100vw;
  padding: 0 clamp(3rem, 0.7273rem + 7.1023vw, 8rem) 5.5rem;
`
