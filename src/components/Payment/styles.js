import styled from 'styled-components'

export const Container = styled.div`
  h4 {
    ${({ theme }) => theme.FONTS.ROBOTO.SMALL_REGULAR}
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 4fr;

  grid-template-areas:
    'pix credit'
    'content content';
`
export const Pix = styled.div`
  grid-area: pix;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  border-top: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  border-left: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  border-radius: 8px 0px 0px 0px;
`
export const Credit = styled.div`
  grid-area: credit;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  border-top: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  border-right: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  border-left: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  border-radius: 0px 8px 0px 0px;
`
export const Content = styled.div`
  grid-area: content;
  padding: 6rem 3rem;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  border-radius: 0px 0px 8px 8px;
`
export const Col2 = styled.div`
  display: flex;
  gap: 1.6rem;
`
