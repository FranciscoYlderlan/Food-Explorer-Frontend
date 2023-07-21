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
  background-color: ${({ theme, isOpen }) =>
    isOpen ? theme.COLORS.DARK_800 : 'transparent'};

  &:hover {
    cursor: pointer;
  }
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
  background-color: ${({ theme, isOpen }) =>
    isOpen ? theme.COLORS.DARK_800 : 'transparent'};
  &:hover {
    cursor: pointer;
  }
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: content;
  padding: 6rem 3rem;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  border-radius: 0px 0px 8px 8px;

  @media ${({ theme }) => theme.DEVICES.largeScreen} {
    > img {
      height: 21.4rem;
      margin: auto 12.3rem;
    }
  }

  @media ${({ theme }) => theme.DEVICES.laptop} {
    > img {
      height: 21.4rem;
    }
  }
`
export const Col2 = styled.div`
  display: flex;
  gap: 1.6rem;
`
