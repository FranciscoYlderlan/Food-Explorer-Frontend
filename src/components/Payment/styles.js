import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  /* height: 32rem;
  width: 35rem; */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 4fr;

  grid-template-areas:
    'pix credit'
    'content content';
  padding: 3.2rem 4rem;
`
export const Pix = styled.div`
  grid-area: pix;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 3rem 6rem;
`
export const Credit = styled.div`
  grid-area: credit;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 3rem 6rem;
`
export const Content = styled.div`
  grid-area: content;
  padding: 3rem 6rem;
`
export const Col2 = styled.div`
  display: flex;
  gap: 1.6rem;
`
